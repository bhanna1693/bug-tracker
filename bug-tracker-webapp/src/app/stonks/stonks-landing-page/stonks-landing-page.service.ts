import {Injectable} from '@angular/core';
import {FormControl} from "@angular/forms";
import {concat, Observable, of} from "rxjs";
import {SymbolSearchItem} from "../../models/stonks/symbol-search";
import {debounceTime, distinctUntilChanged, filter, finalize, map, switchMap} from "rxjs/operators";
import {StonksControllerService} from "../../api/stonks-controller.service";

@Injectable({
  providedIn: 'root'
})
export class StonksLandingPageService {
  typeAheadControl = new FormControl(null);
  typeAheadPending = false;
  filteredOption$: Observable<SymbolSearchItem[]>;


  constructor(private stonksControllerService: StonksControllerService) {
    this.setFilteredOption();
  }

  setFilteredOption() {
    this.filteredOption$ = concat(
      of([]),
      this.typeAheadControl.valueChanges
        .pipe(
          debounceTime(250),
          distinctUntilChanged(),
          filter((keywords) => keywords?.length >= 2),
          switchMap((keywords) => {
            this.typeAheadPending = true;
            return this.stonksControllerService.getStockTypeahead(keywords)
              .pipe(
                map(resp => resp.bestMatches),
                finalize(() => this.typeAheadPending = false)
              )
          })
        )
    )
  }

}
