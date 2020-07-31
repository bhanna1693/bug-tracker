import { Component, OnInit } from '@angular/core';
import {Observable, of, Subject} from "rxjs";
import {CompanyOverview} from "../../../models/stonks/company-overview";
import {catchError, delay, filter, finalize, map, switchMap} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";
import {StonksControllerService} from "../../../api/stonks-controller.service";

@Component({
  selector: 'app-company-overview',
  templateUrl: './company-overview.component.html',
  styleUrls: ['./company-overview.component.css']
})
export class CompanyOverviewComponent implements OnInit {
  fetchingCompanyOverviewData = false;
  companyOverviewData$: Observable<CompanyOverview>;
  errorFetchingCompanyOverviewData$ = new Subject<boolean>();

  constructor(private activatedRoute: ActivatedRoute,
              private stonksControllerService: StonksControllerService) { }

  ngOnInit(): void {
    this.setCompanyOverviewData();
  }

  setCompanyOverviewData() {
    this.companyOverviewData$ = this.activatedRoute.queryParamMap
      .pipe(
        delay(3000),
        map((params) => params.get('symbol')),
        filter((symbol) => symbol != null),
        switchMap((symbol) => {
          this.fetchingCompanyOverviewData = true;
          return this.stonksControllerService.getCompanyOverview(symbol)
            .pipe(
              catchError(err => {
                console.error('Error fetching company overview data', err);
                this.errorFetchingCompanyOverviewData$.next(true);
                return of(null);
              }),
              finalize(() => this.fetchingCompanyOverviewData = false)
            )
        })
      )
  }

}
