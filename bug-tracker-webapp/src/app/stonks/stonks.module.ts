import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StonksRoutingModule} from './stonks-routing.module';
import {StocksHomeComponent} from './stocks-home/stocks-home.component';
import {LoadingOrErrorModule} from "../other/loading-or-error/loading-or-error.module";
import {MatDividerModule} from "@angular/material/divider";
import {CompanyOverviewComponent} from './stocks-home/company-overview/company-overview.component';
import {StonksSearchModule} from "./stocks-home/stonks-search/stonks-search.module";


@NgModule({
  declarations: [StocksHomeComponent, CompanyOverviewComponent],
  imports: [
    CommonModule,
    StonksRoutingModule,
    LoadingOrErrorModule,
    MatDividerModule,
    StonksSearchModule
  ]
})
export class StonksModule {
}
