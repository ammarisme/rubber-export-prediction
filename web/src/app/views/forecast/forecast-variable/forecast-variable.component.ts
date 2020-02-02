import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {TimeSeriesChart} from '../time-series-chart';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

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

  isCollapsed: boolean = false;
  SecondaryisCollapsed: boolean = true;
  TertiaryisCollapsed: boolean = true;


  closeResult: string;

  constructor(private modalService: NgbModal) {}


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
  }


  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'xl'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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

}
