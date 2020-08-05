import {Component, OnInit} from '@angular/core';
import {Observable, of, Subject} from "rxjs";
import {CompanyOverview} from "../../../models/stonks/company-overview";
import {catchError, filter, finalize, map, switchMap} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";
import {StonksControllerService} from "../../../api/stonks-controller.service";

@Component({
  selector: 'app-company-overview',
  templateUrl: './company-overview.component.html',
  styleUrls: ['./company-overview.component.css']
})
export class CompanyOverviewComponent implements OnInit {
  companyOverviewData$: Observable<CompanyOverview>;
  fetchingCompanyOverviewData = false;
  errorFetchingCompanyOverviewData$ = new Subject<boolean>();

  constructor(private activatedRoute: ActivatedRoute,
              private stonksControllerService: StonksControllerService) {
  }

  ngOnInit(): void {
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
