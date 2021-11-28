import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PowerbiComponent } from './components/powerbi/powerbi.component';

const routes: Routes = [
  {
    path: '',
    component: PowerbiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PowerbiRoutingModule { }
