import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StonksRoutingModule } from './stonks-routing.module';
import { StocksHomeComponent } from './stocks-home/stocks-home.component';


@NgModule({
  declarations: [StocksHomeComponent],
  imports: [
    CommonModule,
    StonksRoutingModule
  ]
})
export class StonksModule { }
