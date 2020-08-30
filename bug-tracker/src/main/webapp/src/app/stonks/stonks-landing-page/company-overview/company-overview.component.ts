import {Component, OnInit} from '@angular/core';
import {catchError, finalize, map, switchMap} from "rxjs/operators";
import {forkJoin, Observable, of, Subject} from "rxjs";
import {CompanyOverview} from "../../../models/stonks/company-overview";
import {ActivatedRoute} from "@angular/router";
import {StonksControllerService} from "../../../api/stonks-controller.service";
import {GlobalQuote} from "../../../models/stonks/global-quote";

@Component({
  selector: 'app-company-overview',
  templateUrl: './company-overview.component.html',
  styleUrls: ['./company-overview.component.css']
})
export class CompanyOverviewComponent implements OnInit {
  companyData$: Observable<{ overview: CompanyOverview, globalQuote: GlobalQuote }>;
  fetchingCompanyData = false;
  errorFetchingCompanyData$ = new Subject<boolean>();

  constructor(private activatedRoute: ActivatedRoute,
              private stonksControllerService: StonksControllerService) {
  }

  ngOnInit(): void {
    this.setCompanyOverviewData();
  }

  setCompanyOverviewData() {
    this.companyData$ = this.activatedRoute.paramMap
      .pipe(
        map((paramMap) => paramMap.get('symbol')),
        switchMap((symbol: string) => {
          this.fetchingCompanyData = true;
          this.errorFetchingCompanyData$.next(false);
          return forkJoin([
            this.stonksControllerService.getCompanyOverview(symbol),
            this.stonksControllerService.getGlobalQuote(symbol)
          ])
            .pipe(
              map(([overview, globalQuote]) => {
                console.log({overview, globalQuote});
                return {overview, globalQuote};
              }),
              catchError(err => {
                console.error('Error fetching company data', err);
                this.errorFetchingCompanyData$.next(true);
                return of(null);
              }),
              finalize(() => this.fetchingCompanyData = false)
            )
        })
      );
  }

}
