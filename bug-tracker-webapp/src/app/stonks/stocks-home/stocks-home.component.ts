import {Component, OnInit} from '@angular/core';
import {StonksControllerService} from "../../api/stonks-controller.service";
import {FormControl} from "@angular/forms";
import {BehaviorSubject, Observable} from "rxjs";
import {debounceTime, distinctUntilChanged, map, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-stocks-home',
  templateUrl: './stocks-home.component.html',
  styleUrls: ['./stocks-home.component.css']
})
export class StocksHomeComponent implements OnInit {
  stonks = this.stonksControllerService.getTimeSeriesData('AAPL');
  myControl = new FormControl(null);
  filteredOption$ = new BehaviorSubject<any>([]);

  constructor(private stonksControllerService: StonksControllerService) {
  }

  ngOnInit(): void {
    this.subscribeToFC();
  }

  subscribeToFC() {
    this.myControl.valueChanges
      .pipe(
        debounceTime(100),
        distinctUntilChanged(),
        switchMap<string, Observable<any>>((keywords) => this.stonksControllerService.getStockTypeahead(keywords)),
        map(resp => resp['bestMatches'])
      ).subscribe(resp => this.filteredOption$.next(resp))
  }

}
