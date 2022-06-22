import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {PagesRoutingModule} from "./pages.routing-module";
import {ProductCardComponent} from "../ui/product-card/product-card.component";
import {UiModule} from "../ui/ui.module";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    HomeComponent,
    ProductCardComponent
  ],
  exports: [
    HomeComponent,
    ProductCardComponent
  ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        UiModule,
        MatButtonModule
    ]
})
export class PagesModule { }
