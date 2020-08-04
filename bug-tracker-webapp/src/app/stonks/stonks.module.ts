import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StonksRoutingModule} from './stonks-routing.module';
import {StocksHomeComponent} from './stocks-home/stocks-home.component';
import {LoadingOrErrorModule} from "../other/loading-or-error/loading-or-error.module";
import {MatDividerModule} from "@angular/material/divider";
import {CompanyOverviewComponent} from './company-overview/company-overview.component';
import {StonksSearchModule} from "./stonks-landing-page/stonks-search/stonks-search.module";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { StonksLandingPageComponent } from './stonks-landing-page/stonks-landing-page.component';


@NgModule({
  declarations: [StocksHomeComponent, CompanyOverviewComponent, StonksLandingPageComponent],
  imports: [
    CommonModule,
    StonksRoutingModule,
    LoadingOrErrorModule,
    MatDividerModule,
    StonksSearchModule,
    MatProgressSpinnerModule
  ]
})
export class StonksModule {
}
