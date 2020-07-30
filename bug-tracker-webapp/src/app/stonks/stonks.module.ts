import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StonksRoutingModule } from './stonks-routing.module';
import { StocksHomeComponent } from './stocks-home/stocks-home.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [StocksHomeComponent],
  imports: [
    CommonModule,
    StonksRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule
  ]
})
export class StonksModule { }
