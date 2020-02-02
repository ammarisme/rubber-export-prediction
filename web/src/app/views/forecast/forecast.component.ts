import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {TimeSeriesChart} from './time-series-chart';

@Component({
  templateUrl: 'forecast.component.html'
})
export class ForecastComponent implements OnInit {
  radioModel: string = 'Month';
  public chart: TimeSeriesChart;

  public random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  ngOnInit(): void {
    this.chart = new TimeSeriesChart();
    console.log('sdadad')
  }
}
