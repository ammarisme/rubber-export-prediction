import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {TimeSeriesChart} from '../time-series-chart';

@Component({
  templateUrl: './forecast-adjust.component.html'
})
export class ForecastAdjustComponent implements OnInit {
  radioModel: string = 'Month';
  public chart: TimeSeriesChart;
  stacked: any[] = [];
  stacked1: any[] = [];
  stacked2: any[] = [];

  isCollapsed: boolean = false;
  SecondaryisCollapsed: boolean = true;
  TertiaryisCollapsed: boolean = true;


  ngOnInit(): void {
    this.chart = new TimeSeriesChart();
    //this.randomStacked();
    this.stacked = [{value: 15, type: 'success', label: '15 %' ,},{value: 26, type: 'warning', label: '26 %'}]
    this.stacked1 = [{value: 25, type: 'success', label: '25 %' ,},{value: 20, type: 'warning', label: '20%'}]
    this.stacked2  = [{value: 35, type: 'success', label: '35 %' ,},{value: 16, type: 'warning', label: '16 %'}]
//    this.stacked = [25, 4];
  }


  SecondarycollapseClicked(event){
    this.SecondaryisCollapsed = !this.SecondaryisCollapsed
    event.preventDefault();
  }
  Secondarycollapsed(event: any): void {
    // console.log(event);
  }

  Secondaryexpanded(event: any): void {
    // console.log(event);
  }

  TertiarycollapseClicked(event){
    this.TertiaryisCollapsed = !this.TertiaryisCollapsed
    event.preventDefault();
  }
  Tertiarycollapsed(event: any): void {
    // console.log(event);
  }

  Tertiaryexpanded(event: any): void {
    // console.log(event);
  }
  collapseClicked(event){
    this.isCollapsed = !this.isCollapsed
    event.preventDefault();
  }
  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  randomStacked(): void {
    const types = ['success', 'info', 'warning', 'danger'];

    this.stacked = [];
    const n = Math.floor(Math.random() * 4 + 1);
    for (let i = 0; i < n; i++) {
      const index = Math.floor(Math.random() * 4);
      const value = Math.floor(Math.random() * 27 + 3);
      this.stacked.push({
        value,
        type: types[index],
        label: value + ' %'
      });
    }
  }
}
