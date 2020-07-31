import {Component, OnInit} from '@angular/core';
import {StonksControllerService} from "../../api/stonks-controller.service";
import {FormControl} from "@angular/forms";
import {concat, Observable, of, Subject} from "rxjs";
import {catchError, debounceTime, distinctUntilChanged, filter, finalize, map, switchMap} from "rxjs/operators";
import {SymbolSearchItem} from "../../models/stonks/symbol-search";
import {ActivatedRoute, Router} from "@angular/router";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {CompanyOverview} from "../../models/stonks/company-overview";

@Component({
  selector: 'app-stocks-home',
  templateUrl: './stocks-home.component.html',
  styleUrls: ['./stocks-home.component.css']
})
export class StocksHomeComponent implements OnInit {
  myControl = new FormControl(null);
  filteredOption$: Observable<SymbolSearchItem[]>;
  fetchingCompanyOverviewData = false;
  companyOverviewData$: Observable<CompanyOverview>;
  errorFetchingCompanyOverviewData$ = new Subject<boolean>();

  constructor(private stonksControllerService: StonksControllerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.setFilteredOption();
    this.setCompanyOverviewData();
  }

  setCompanyOverviewData() {
    this.companyOverviewData$ = this.activatedRoute.queryParamMap
      .pipe(
        map((params) => params.get('symbol')),
        filter((symbol) => symbol != null),
        switchMap((symbol) => {
          return this.stonksControllerService.getCompanyOverview(symbol)
            .pipe(
              catchError(err => {
                console.error('Error fetching company overview data', err);
                this.errorFetchingCompanyOverviewData$.next(true);
                return of(null);
              })
            )
        })
      )
  }

  setFilteredOption() {
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

  onOptionSelected(e: MatAutocompleteSelectedEvent) {
    this.router.navigate([], {
      queryParams: {symbol: e.option.value}
    })
  }

  displayFn(stock: SymbolSearchItem) {
    return stock ? stock["2. name"] : null;
  }

}
