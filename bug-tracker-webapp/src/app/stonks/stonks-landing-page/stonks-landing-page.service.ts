import {Injectable} from '@angular/core';
import {FormControl} from "@angular/forms";
import {concat, Observable, of, Subject} from "rxjs";
import {SymbolSearchItem} from "../../models/stonks/symbol-search";
import {catchError, debounceTime, distinctUntilChanged, filter, finalize, map, switchMap} from "rxjs/operators";
import {StonksControllerService} from "../../api/stonks-controller.service";
import {CompanyOverview} from "../../models/stonks/company-overview";
import {ActivatedRoute} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class StonksLandingPageService {
  typeAheadControl = new FormControl(null);
  typeAheadPending = false;
  filteredOption$: Observable<SymbolSearchItem[]>;
  companyOverviewData$: Observable<CompanyOverview>;
  fetchingCompanyOverviewData = false;
  errorFetchingCompanyOverviewData$ = new Subject<boolean>();

  constructor(private stonksControllerService: StonksControllerService,
              private activatedRoute: ActivatedRoute) {
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

  setCompanyOverviewData() {
    this.companyOverviewData$ = this.activatedRoute.paramMap
      .pipe(
        map((paramMap) => paramMap.get('symbol')),
        switchMap((symbol) => {
          this.fetchingCompanyOverviewData = true;
          this.errorFetchingCompanyOverviewData$.next(false);
          return this.stonksControllerService.getCompanyOverview(symbol)
            .pipe(
              catchError(err => {
                console.error('Error fetching company overview data', err);
                this.errorFetchingCompanyOverviewData$.next(true);
                return of<null>(null);
              }),
              finalize(() => this.fetchingCompanyOverviewData = false)
            )
        })
      );
  }
}
