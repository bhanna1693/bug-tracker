import {Component, OnInit} from '@angular/core';
import {StonksControllerService} from "../../api/stonks-controller.service";
import {FormControl} from "@angular/forms";
import {concat, Observable, of} from "rxjs";
import {debounceTime, distinctUntilChanged, filter, map, switchMap} from "rxjs/operators";
import {SymbolSearchItem} from "../../models/stonks/symbol-search";

@Component({
  selector: 'app-stocks-home',
  templateUrl: './stocks-home.component.html',
  styleUrls: ['./stocks-home.component.css']
})
export class StocksHomeComponent implements OnInit {
  myControl = new FormControl(null);
  filteredOption$: Observable<SymbolSearchItem[]>;

  constructor(private stonksControllerService: StonksControllerService) {
  }

  ngOnInit(): void {
    this.subscribeToFC();
  }

  subscribeToFC() {
    this.filteredOption$ = concat(
      of([]),
      this.myControl.valueChanges
        .pipe(
          debounceTime(250),
          distinctUntilChanged(),
          filter((keywords) => keywords?.length >= 2),
          switchMap((keywords) => this.stonksControllerService.getStockTypeahead(keywords)
            .pipe(map(resp => resp.bestMatches))
          )
        )
    )
  }

  displayFn(stock: any) {
    return stock ? stock['2. name'] : null;
  }

}
