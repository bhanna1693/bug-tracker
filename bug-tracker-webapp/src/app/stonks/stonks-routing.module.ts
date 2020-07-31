import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StocksHomeComponent} from "./stocks-home/stocks-home.component";
import {CompanyOverviewComponent} from "./stocks-home/company-overview/company-overview.component";


const routes: Routes = [
  {
    path: '',
    component: StocksHomeComponent,
    children: [
      // {path: '', component: null},
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
