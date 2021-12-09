import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlpanelComponent } from './controlpanel/controlpanel.component';
import { PardComponent } from './pard/pard.component';
import { SurveysourceComponent } from './surveysource/surveysource.component';

const routes: Routes = [
  {
    path: 'reports/controlpanel',
    component: ControlpanelComponent
  },
  {
    path: 'reports/surveysource',
    component: SurveysourceComponent
  },
  {
    path: 'reports/pard',
    component: PardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
