import { Component } from '@angular/core';

@Component({
  templateUrl: 'collapses.component.html'
})
export class CollapsesComponent {

  constructor() { }

  isCollapsed: boolean = false;

  collapsed(event: any): void {
    // console.log(event);
    event.preventDefault();
  }

  expanded(event: any): void {
    // console.log(event);
    event.preventDefault();
  }

}
