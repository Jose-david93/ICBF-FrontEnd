import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentAuthComponent } from '@content-auth/content-auth.component';
import { ContentComponent } from '@content/content.component';
import { Guard } from './core/guard/guard';

const routes: Routes = [
  {
    path:'',
    component: ContentComponent,
    children: [
      {
        path:'',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('@home/home.module').then(m => m.HomeModule),
        canActivate: [Guard]
      },
    ]
  },
  {
    path: '',
    component: ContentAuthComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('@login/login.module').then(m => m.LoginModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
