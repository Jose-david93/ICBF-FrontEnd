import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './components/content/content.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ContentAuthComponent } from './components/content-auth/content-auth.component';



@NgModule({
  declarations: [
    ContentComponent,
    HeaderComponent,
    FooterComponent,
    ContentAuthComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
