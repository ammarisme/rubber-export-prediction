import {Input} from '@angular/core';

export class TimeSeriesChart{

  @Input() onclickFunc;
  @Input() selectedYear;

  constructor(){
    this.lineChartColours = this.customColors;
  }

  public lineChartData: Array<any> = [
    {data: [
        3.633659,
        3.614399,
        4.048957,
        /*4.953043,
        4.518079,
        2.259685,
        5.31435,
        4.567322,
        4.101086,
        3.176627,
        2.861086,
        2.476432,*/
      ], label: 'Actual',
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
      ], label: 'Forecasted' ,
      lineTension: 0
    }
  ];
  public lineChartLabels: Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'];
  public lineChartOptions: any = {
    animation: true,
    responsive: true,
    bezierCurve: false,
    onClick: this.onclickFunc
  };
  public lineChartColours: Array<any> = [
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  public customColors = [
    { // grey
    backgroundColor: '#3282b8',
    borderColor: '#3282b8',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      /*fill : false,*/
      borderColor: '#ec7373',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    /*{ // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }*/
    ];

  chartHovered(event){}
  chartClicked(event){}

  modeChange(mode){
    if('line-comparison'){
      this.lineChartColours =  [
        { // grey
          backgroundColor: '#3282b8',
          borderColor: '#3282b8',
          fill : false,
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        { // dark grey
          backgroundColor: 'rgba(77,83,96,0.2)',
          fill : false,
          borderColor: '#ec7373',
          pointBackgroundColor: 'rgba(77,83,96,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(77,83,96,1)'
        }
      ];
    }
  }

  dataChange(data){
    this.lineChartData= data;
  }
}
