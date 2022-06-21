import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { SelectComponent } from './select/select.component';
import {MatRippleModule} from "@angular/material/core";


@NgModule({
  declarations: [
    ButtonComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,

    // Angular Material
    MatRippleModule
  ],
  exports: [
    ButtonComponent,
    SelectComponent
  ]
})
export class UiModule { }
