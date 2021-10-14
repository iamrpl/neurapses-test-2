import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLoginComponent } from './app-login/app-login.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { PayInfoComponent } from './pay-info/pay-info.component';

const routes: Routes = [
  {
    path : '',
    component : BasicInfoComponent
  },
  {
    path : 'make-payment',
    component : PayInfoComponent
  },
  {
    path : 'app-login',
    component : AppLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirverAdditionRoutingModule { }
