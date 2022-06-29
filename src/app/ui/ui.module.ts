import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from './button/button.component';
import {SelectComponent} from './select/select.component';
import {MatRippleModule} from "@angular/material/core";
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {QuickCartComponent} from './quick-cart/quick-cart.component';
import { CartQuantityComponent } from './cart-quantity/cart-quantity.component';
import {RouterModule} from "@angular/router";
import { SearchProductResultComponent } from "./search-product-result/search-product-result.component";
import { MatDialogModule } from "@angular/material/dialog";
import { SearchModalComponent } from "./search-modal/search-modal.component";

@NgModule({
  declarations: [
    ButtonComponent,
    SelectComponent,
    HeaderComponent,
    FooterComponent,
    QuickCartComponent,
    CartQuantityComponent,
    SearchProductResultComponent,
    SearchModalComponent
  ],
  imports: [
    CommonModule,

    // Angular Material
    MatRippleModule,
    RouterModule,
    MatDialogModule
  ],
  exports: [
    ButtonComponent,
    SelectComponent,
    HeaderComponent,
    FooterComponent,
    QuickCartComponent,
    CartQuantityComponent,
    SearchProductResultComponent,
    SearchModalComponent
  ]
})
export class UiModule {
}
