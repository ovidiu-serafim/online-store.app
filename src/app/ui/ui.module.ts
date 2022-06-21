import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { SelectComponent } from './select/select.component';
import {MatRippleModule} from "@angular/material/core";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    ButtonComponent,
    SelectComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,

    // Angular Material
    MatRippleModule
  ],
  exports: [
    ButtonComponent,
    SelectComponent,
    HeaderComponent,
    FooterComponent,
  ]
})
export class UiModule { }
