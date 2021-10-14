import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirverAdditionRoutingModule } from './dirver-addition-routing.module';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { PayInfoComponent } from './pay-info/pay-info.component';
import { AppLoginComponent } from './app-login/app-login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BasicInfoComponent,
    PayInfoComponent,
    AppLoginComponent
  ],
  imports: [
    CommonModule,
    DirverAdditionRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DirverAdditionModule { }
