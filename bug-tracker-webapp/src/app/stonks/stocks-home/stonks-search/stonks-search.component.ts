import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {concat, Observable, of} from "rxjs";
import {SymbolSearchItem} from "../../../models/stonks/symbol-search";
import {StonksControllerService} from "../../../api/stonks-controller.service";
import {Router} from "@angular/router";
import {debounceTime, distinctUntilChanged, filter, finalize, map, switchMap} from "rxjs/operators";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";

@Component({
  selector: 'app-stonks-search',
  templateUrl: './stonks-search.component.html',
  styleUrls: ['./stonks-search.component.css']
})
export class StonksSearchComponent implements OnInit {
  typeAheadControl = new FormControl(null);
  typeAheadPending = false;
  filteredOption$: Observable<SymbolSearchItem[]>;

  constructor(private stonksControllerService: StonksControllerService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.setFilteredOption();
  }

  setFilteredOption() {
    this.filteredOption$ = concat(
      of([]),
      this.typeAheadControl.valueChanges
        .pipe(
          debounceTime(250),
          distinctUntilChanged(),
          filter((keywords) => keywords?.length >= 2),
          switchMap((keywords) => {
            this.typeAheadPending = true;
            return this.stonksControllerService.getStockTypeahead(keywords)
              .pipe(
                map(resp => resp.bestMatches),
                finalize(() => this.typeAheadPending = false)
              )
          })
        )
    )
  }

  onOptionSelected(e: MatAutocompleteSelectedEvent) {
    this.router.navigate([], {
      queryParams: {symbol: e.option.value}
    })
  }

  displayFn(stock: SymbolSearchItem) {
    return stock ? stock["2. name"] : null;
  }

}
