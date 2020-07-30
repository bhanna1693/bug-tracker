import { Component, OnInit } from '@angular/core';
import {StonksControllerService} from "../../api/stonks-controller.service";

@Component({
  selector: 'app-stocks-home',
  templateUrl: './stocks-home.component.html',
  styleUrls: ['./stocks-home.component.css']
})
export class StocksHomeComponent implements OnInit {
  stonks = this.stonksControllerService.getTimeSeriesData('AAPL');

  constructor(private stonksControllerService: StonksControllerService) { }

  ngOnInit(): void {
  }

}
