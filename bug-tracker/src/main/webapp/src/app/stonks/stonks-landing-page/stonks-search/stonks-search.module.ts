import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StonksSearchComponent} from "./stonks-search.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [StonksSearchComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule
  ],
  exports: [StonksSearchComponent]
})
export class StonksSearchModule {
}
