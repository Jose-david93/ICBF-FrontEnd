import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './components/content/content.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ContentAuthComponent } from './components/content-auth/content-auth.component';
import { NavComponent } from './components/header/nav/nav.component';
import { PreHeaderComponent } from './components/pre-header/pre-header.component';



@NgModule({
  declarations: [
    ContentComponent,
    HeaderComponent,
    FooterComponent,
    ContentAuthComponent,
    NavComponent,
    PreHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
