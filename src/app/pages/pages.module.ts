import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {PagesRoutingModule} from "./pages.routing-module";
import { CartComponent } from './cart/cart.component';
import {UiModule} from "../ui/ui.module";


@NgModule({
  declarations: [
    HomeComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    UiModule
  ]
})
export class PagesModule { }
