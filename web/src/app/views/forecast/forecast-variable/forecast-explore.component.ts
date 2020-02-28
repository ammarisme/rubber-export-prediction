import {Component, Input, OnInit} from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {TimeSeriesChart} from '../time-series-chart';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {HttpServiceService} from '../../../httpservice.service';
import {Prediction} from '../../../models/prediction-model';

@Component({
  selector: 'app-forecast-variable',
  templateUrl: './forecast-variable.component.html'
})
export class ForecastVariableComponent implements OnInit {
  radioModel: string = 'Month';
  public chart: TimeSeriesChart;
  stacked: any[] = [];
  stacked1: any[] = [];
  stacked2: any[] = [];

  @Input() parameter;
  @Input() predictions : Prediction[];

  isCollapsed: boolean = false;
  SecondaryisCollapsed: boolean = true;
  TertiaryisCollapsed: boolean = true;

  closeResult: string;

  constructor(private httpService: HttpServiceService) {}

  ngOnInit(): void {
    this.chart = new TimeSeriesChart();
    this.stacked = [{value: 15, type: 'success', label: '15 %' ,}];
    this.stacked1 = [{value: 20, type: 'warning', label: '20%'}];
    this.stacked2  = [ {value: 16, type: 'warning', label: '16 %'}];

    this.chart.modeChange('line-comparison');
    this.chart.dataChange(
      [{data: [
          3.633659,
          3.614399,
          4.048957,
          4.953043,
          4.518079,
          2.259685,
          5.31435,
          4.567322,
          4.101086,
          3.176627,
          2.861086,
          2.476432,
        ], label: 'Rainfall',
        lineTension: 0
      },
      {data: [
          3.658453,
          3.298157,
          4.137402,
          4.415252,
          4.373069,
          2.714736,
          4.896931,
          4.715471,
          4.341805,
          2.904915,
          3.149111,
          2.838386
        ], label: 'Export Volume' ,
        lineTension: 0
      }]);

    this.httpService.getParameterValuesForYear(this.parameter.parameter, this.parameter.year).subscribe((result : any) => {
      let y_values = [];
      let yhat = [];

      if(result.data){
        for(let id in result.data){
          y_values.push(result.data[id].value_std);
        }

        for(let id in this.predictions){
          yhat.push(this.predictions[id].fitted_std);
        }

        this.chart.lineChartData = [{data: y_values, label: this.parameter.parameter,
          lineTension: 0
        } , {data: yhat, label: 'Export Volume Forecast' ,
          lineTension: 0
        }];
      }
    })

  }
}
