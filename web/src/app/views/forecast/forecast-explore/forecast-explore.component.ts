import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {TimeSeriesChart} from '../time-series-chart';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

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


  closeResult: string;

  constructor(private modalService: NgbModal) {}


  ngOnInit(): void {
    this.chart = new TimeSeriesChart();
    this.stacked = [{value: 15, type: 'success', label: '15 %' ,}, {value: 26, type: 'warning', label: '26 %'}];
    this.stacked1 = [{value: 25, type: 'success', label: '25 %' ,}, {value: 20, type: 'warning', label: '20%'}];
    this.stacked2  = [{value: 35, type: 'success', label: '35 %' ,}, {value: 16, type: 'warning', label: '16 %'}];
  }


  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title' , size : 'xl'}).result.then((result) => {
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
