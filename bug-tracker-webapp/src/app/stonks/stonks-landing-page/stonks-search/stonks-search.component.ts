import {Component, OnInit} from '@angular/core';
import {SymbolSearchItemDTO} from "../../../models/stonks/symbol-search";
import {Router} from "@angular/router";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {StonksLandingPageService} from "../stonks-landing-page.service";

@Component({
  selector: 'app-stonks-search',
  templateUrl: './stonks-search.component.html',
  styleUrls: ['./stonks-search.component.css']
})
export class StonksSearchComponent implements OnInit {

  constructor(private router: Router,
              private stonksLandingPage: StonksLandingPageService) {
  }

  get typeAheadControl() {
    return this.stonksLandingPage.typeAheadControl;
  }

  get typeAheadPending() {
    return this.stonksLandingPage.typeAheadPending;
  }

  get filteredOption$() {
    return this.stonksLandingPage.filteredOption$;
  }

  ngOnInit(): void {
  }

  onOptionSelected(e: MatAutocompleteSelectedEvent) {
    const item = e.option.value as SymbolSearchItemDTO;
    const symbol = item.symbol;
    this.router.navigate(['stonks', symbol]);
  }

  displayFn(stock: SymbolSearchItemDTO) {
    return stock ? stock.name : null;
  }

}
