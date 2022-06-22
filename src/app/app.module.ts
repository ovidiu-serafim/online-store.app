import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {MatRippleModule} from "@angular/material/core";
import {CoreModule} from "./core/core.module";
import {AppRoutingModule} from "./app-routing.module";
import {UiModule} from "./ui/ui.module";
import {PagesModule} from "./pages/pages.module";
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    PagesModule,
    UiModule,
    AppRoutingModule,

    // NgRx
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),

    // Angular Material
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
