import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {TimeSeriesChart} from './time-series-chart';
import {HttpServiceService} from '../../httpservice.service';

@Component({
  templateUrl: 'forecast.component.html'
})
export class ForecastComponent implements OnInit {
  radioModel: string = 'Month';
  public chart: TimeSeriesChart;
  public selectedYear : string;

  constructor(private httpService: HttpServiceService){

  }


  ngOnInit(): void {
    this.chart = new TimeSeriesChart();

    this.httpService.getPredictions("2020").subscribe(result => {
      let y_values = [];
      let yhat = [];

      if(result.data){
        for(let id in result.data){
          y_values.push(result.data[id].actual);
          yhat.push(result.data[id].fitted);
        }

        this.chart.lineChartData = [{data: y_values, label: 'Actual',
          lineTension: 0
        } , {data: yhat, label: 'Export Volume Forecast' ,
          lineTension: 0
        }];
      }
      });

  }

  onYearChange(event){
    this.httpService.getPredictions(this.selectedYear.toString()).subscribe(result => {
      let y_values = [];
      let yhat = [];

      if(result.data){
        for(let id in result.data){
          y_values.push(result.data[id].actual);
          yhat.push(result.data[id].fitted);
        }
        this.chart.lineChartData = [{data: y_values, label: 'Actual',
          lineTension: 0
        } , {data: yhat, label: 'Forecasted' ,
          lineTension: 0
        }];
      }
    });
  }
}
