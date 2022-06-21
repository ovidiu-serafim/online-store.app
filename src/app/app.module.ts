import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {MatRippleModule} from "@angular/material/core";
import {CoreModule} from "./core/core.module";
import {AppRoutingModule} from "./app-routing.module";
import {UiModule} from "./ui/ui.module";
import {PagesModule} from "./pages/pages.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    PagesModule,
    UiModule,
    AppRoutingModule,

    // Angular Material
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
