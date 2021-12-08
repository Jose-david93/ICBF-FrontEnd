import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ControlpanelComponent } from './controlpanel/controlpanel.component';
import { SurveysourceComponent } from './surveysource/surveysource.component';
import { PardComponent } from './pard/pard.component';


@NgModule({
  declarations: [
    ControlpanelComponent,
    SurveysourceComponent,
    PardComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
