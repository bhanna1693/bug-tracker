import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CompanyOverviewComponent} from "./stonks-landing-page/company-overview/company-overview.component";
import {StonksLandingPageComponent} from "./stonks-landing-page/stonks-landing-page.component";
import {StocksHomeComponent} from "./stonks-landing-page/stocks-home/stocks-home.component";


const routes: Routes = [
  {
    path: '',
    component: StonksLandingPageComponent,
    children: [
      {
        path: '',
        component: StocksHomeComponent
      },
      {
        path: ':symbol',
        component: CompanyOverviewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StonksRoutingModule {
}
