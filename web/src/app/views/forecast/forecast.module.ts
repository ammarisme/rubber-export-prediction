import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { ForecastComponent } from './forecast.component';
import { ForecastRoutingModule } from './forecast-routing.module';
import {ForecastAdjustComponent} from './forecast-adjust/forecast-adjust.component';
import {CollapseModule, ProgressbarModule} from 'ngx-bootstrap';
import {ForecastExploreComponent} from './forecast-explore/forecast-explore.component';
import {NgbModalBackdrop} from '@ng-bootstrap/ng-bootstrap/modal/modal-backdrop';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ForecastVariableComponent} from './forecast-variable/forecast-explore.component';
import {HttpServiceService} from '../../httpservice.service';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    FormsModule,
    ForecastRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    ProgressbarModule.forRoot(),
    ProgressbarModule,
    CollapseModule,
    NgbModule,
    HttpClientModule,
    CommonModule
  ],
  declarations: [
    ForecastComponent,
    ForecastAdjustComponent,
    ForecastExploreComponent,
    ForecastVariableComponent
  ],
  entryComponents : [
    ForecastVariableComponent,
    ForecastExploreComponent
  ],
  providers : [
    HttpServiceService
  ]
})
export class ForecastModule { }
