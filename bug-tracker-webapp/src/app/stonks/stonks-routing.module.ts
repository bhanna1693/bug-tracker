import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StocksHomeComponent} from "./stocks-home/stocks-home.component";


const routes: Routes = [
  {
    path: '',
    component: StocksHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StonksRoutingModule { }
