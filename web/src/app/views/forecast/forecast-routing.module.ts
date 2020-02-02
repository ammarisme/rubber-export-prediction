import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForecastComponent } from './forecast.component';
import {ForecastAdjustComponent} from './forecast-adjust/forecast-adjust.component';
import {ForecastExploreComponent} from './forecast-explore/forecast-explore.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Forecast'
    }
    ,
    children: [
      {
        path: 'forecast',
        component: ForecastComponent,
        data: {
          title: 'View'
        }
      },
      {
        path: 'forecast-adjust',
        component: ForecastAdjustComponent,
        data: {
          title: 'Adjust'
        }
      },
      {
        path: 'forecast-explore',
        component: ForecastExploreComponent,
        data: {
          title: 'Explore'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForecastRoutingModule {}
