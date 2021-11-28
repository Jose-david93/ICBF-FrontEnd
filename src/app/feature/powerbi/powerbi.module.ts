import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PowerbiRoutingModule } from './powerbi-routing.module';
import { PowerbiComponent } from './components/powerbi/powerbi.component';

@NgModule({
  declarations: [
    PowerbiComponent
  ],
  imports: [
    CommonModule,
    PowerbiRoutingModule
  ]
})
export class PowerbiModule { }
