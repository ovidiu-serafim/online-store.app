import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from './button/button.component';
import {SelectComponent} from './select/select.component';
import {MatRippleModule} from "@angular/material/core";
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {QuickCartComponent} from './quick-cart/quick-cart.component';

@NgModule({
  declarations: [
    ButtonComponent,
    SelectComponent,
    HeaderComponent,
    FooterComponent,
    QuickCartComponent
  ],
  imports: [
    CommonModule,

    // Angular Material
    MatRippleModule,
  ],
  exports: [
    ButtonComponent,
    SelectComponent,
    HeaderComponent,
    FooterComponent,
    QuickCartComponent,
  ]
})
export class UiModule {
}
