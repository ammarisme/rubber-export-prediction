import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {TimeSeriesChart} from '../time-series-chart';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {HttpServiceService} from '../../../httpservice.service';
import {ForecastVariableComponent} from '../forecast-variable/forecast-explore.component';
import {Prediction} from '../../../models/prediction-model';

@Component({
  templateUrl: './forecast-explore.component.html'
})
export class ForecastExploreComponent implements OnInit {
  radioModel: string = 'Month';
  public chart: TimeSeriesChart;
  stacked: any[] = [];
  stacked1: any[] = [];
  stacked2: any[] = [];


  isCollapsed: boolean = false;
  SecondaryisCollapsed: boolean = true;
  TertiaryisCollapsed: boolean = true;
  yearOnYear: number;
  monthOnMonthPercentage : number;


  closeResult: string;

  public parametersForTheMonth = [];
  public thisYearsPrediction : Prediction[] = [];
  public selectedYear : string;
  annualForecastTotal = 0;
  exportedSoFar = 0;
  systemMonth = "Feb";
  systemYear = "2020";

  constructor(private modalService: NgbModal, private httpService: HttpServiceService) {}

  ngOnInit(): void {
    this.chart = new TimeSeriesChart();
    this.chart.onclickFunc = this.monthClicked;
    this.chart.selectedYear = this.selectedYear;

    this.stacked2 = [ {value: 0, type: 'warning', label: '0 %'}];
    this.stacked1 = [{value: 0, type: 'success', label: '0 %' ,}, ];

    this.selectedYear = "2020";
    this.onYearChange(null);
    this.yearOnYear = 0;
    this.monthOnMonthPercentage = 0;
  }

  monthClicked(evt, datapoints, _this, selectedYear){
    if(evt.active && evt.active.length > 0){
      let index = evt.active[0]._index;
      let month = "Jan";
      switch (index){
        case 0 :
          month = "Jan";
          break
        case 1 :
          month = "Feb";
          break
        case 2 :
          month = "Mar";
          break
        case 3 :
          month = "Apr";
          break
        case 4 :
          month = "May";
          break
        case 5 :
          month = "Jun";
          break
        case 6 :
          month = "Jul";
          break
        case 7 :
          month = "Aug";
          break
        case 8 :
          month = "Sep";
          break
        case 9 :
          month = "Oct";
          break
        case 10 :
          month = "Nov";
          break
        case 11 :
          month = "Dec";
          break
        default :
      }
      _this.httpService.getParameterValuesForMonth(selectedYear, month).subscribe(response => {
        if(response.data) {
          _this.parametersForTheMonth =  response.data;
        }
      });


      _this.httpService.getPredictions((parseInt(selectedYear) - 1).toString()).subscribe( (lastYearResults : any) => {
        _this.yearOnYear = isNaN(parseInt(datapoints[index]) - parseInt(lastYearResults.data[index].fitted)) ? 0 : parseInt(datapoints[index]) - parseInt(lastYearResults.data[index].fitted) ;
        _this.yearOnYear = (100*(_this.yearOnYear / _this.annualForecastTotal)).toFixed(2)
        if(_this.yearOnYear > 0){
          _this.stacked1 = [ {value: _this.yearOnYear * 10 , type: 'success', label:''}];
        }else {
          _this.stacked1 = [ {value: _this.yearOnYear* 10 *-1, type: 'warning', label:''}];
        }
        if(index > 0){
          _this.monthOnMonthPercentage = (100 * (parseInt(datapoints[index]) - parseInt(datapoints[index-1])) /  parseInt(datapoints[index-1])).toFixed(2);
        }else{
          _this.monthOnMonthPercentage = (100 * (parseInt(datapoints[index]) - parseInt(lastYearResults[11])) /  parseInt(lastYearResults[11])).toFixed(2);;
        }


        if(_this.yearOnYear > 0){
          _this.stacked2 = [ {value: _this.monthOnMonthPercentage, type: 'success', label:''}];
        }else {
          _this.stacked2 = [ {value: _this.monthOnMonthPercentage * -1, type: 'warning', label:''}];
        }


      })
    }
  }

  open(content, parameter) {
    content.parameter = parameter;
    let modalRef = this.modalService.open(ForecastVariableComponent, {ariaLabelledBy: 'modal-basic-title' , size : 'xl'})

    modalRef.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

    (<ForecastVariableComponent> modalRef.componentInstance).parameter = parameter;
    (<ForecastVariableComponent> modalRef.componentInstance).predictions = this.thisYearsPrediction;
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
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


  // Doughnut
  public doughnutChartLabels: string[] = ['4006 Volume(Tons)', 'Ramadan Days', 'Rainfall (Prev.)'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType = 'doughnut';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  onYearChange(event){
    this.httpService.getPredictions(this.selectedYear.toString()).subscribe( (result : any)=> {
      let y_values = [];
      let yhat = [];


      let total = 0;
      let soFar = 0;
      let soFarDone = false;
      if(result.data){
        for(let id in result.data){
          y_values.push(result.data[id].actual);
          yhat.push(result.data[id].fitted);
          total += parseInt(result.data[id].fitted);

          if(!soFarDone){
            if(result.data[id].month == this.systemMonth){
              soFarDone = true;
            }else {
              soFar += parseInt(result.data[id].fitted);
            }
          }
        }
        this.chart.lineChartData = [{data: y_values, label: 'Actual',
          lineTension: 0
        } , {data: yhat, label: 'Export Volume Forecast' ,
          lineTension: 0
        }];
      }

      this.annualForecastTotal = total;
      this.exportedSoFar = this.systemYear == this.selectedYear ? soFar : total;

      this.thisYearsPrediction = result.data;

      this.httpService.getParameterValuesForMonth(this.selectedYear, "Jan").subscribe((response : any)=> {
        if(response.data){
          this.parametersForTheMonth =  response.data ;
        }
      });
    });
  }
}
