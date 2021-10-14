import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderContentComponent } from './components/header-content/header-content.component';
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderContentComponent
  ],
  imports: [
    CommonModule,
    MatSliderModule,
    FormsModule
  ],
  exports: [
    HeaderContentComponent
  ]
})
export class SharedModule { }
