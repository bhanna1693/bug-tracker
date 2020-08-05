import {Component, OnInit} from '@angular/core';
import {StonksLandingPageService} from "../stonks-landing-page.service";

@Component({
  selector: 'app-company-overview',
  templateUrl: './company-overview.component.html',
  styleUrls: ['./company-overview.component.css']
})
export class CompanyOverviewComponent implements OnInit {


  constructor(private stonksLandingPage: StonksLandingPageService) {
  }

  get companyOverviewData$() {
    return this.stonksLandingPage.companyOverviewData$;
  }

  get errorFetchingCompanyOverviewData$() {
    return this.stonksLandingPage.errorFetchingCompanyOverviewData$;
  }

  ngOnInit(): void {

  }

}
