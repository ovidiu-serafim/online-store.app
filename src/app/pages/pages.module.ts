import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {PagesRoutingModule} from "./pages.routing-module";
import { CartComponent } from './cart/cart.component';
import {ProductCardComponent} from "../ui/product-card/product-card.component";
import {UiModule} from "../ui/ui.module";
import {MatButtonModule} from "@angular/material/button";
import {AppModule} from "../app.module";
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [
    HomeComponent,
    ProductCardComponent,
    CartComponent
  ],
  exports: [
    HomeComponent,
    ProductCardComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    UiModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class PagesModule {
}
