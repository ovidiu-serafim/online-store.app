import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UiModule} from "./ui/ui.module";
import {MatRippleModule} from "@angular/material/core";
import {PagesModule} from "./pages/pages.module";
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {metaReducers, reducers} from "./redux";
import {AuthEffects} from "./redux/auth/auth.effects";
import {DataService} from "./shared/services/data.service";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {UrlInterceptor} from "./shared/interceptors/url.interceptor";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import {CoreModule} from "./core/core.module";
import { QuickViewComponent } from "./ui/quick-view/quick-view.component";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { SizeSelectorComponent } from './ui/size-selector/size-selector.component';
import {ProductEffects} from "./redux/product/product.effects";

@NgModule({
    declarations: [
        AppComponent,
        QuickViewComponent,
        SizeSelectorComponent
    ],
    imports: [
        CoreModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        UiModule,
        PagesModule,

        // NgRx
        StoreModule.forRoot(reducers, {
            metaReducers
        }),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production
        }),
        EffectsModule.forRoot([
            AuthEffects,
            ProductEffects
        ]),
        StoreRouterConnectingModule.forRoot(),

        // Data mock
        HttpClientInMemoryWebApiModule.forRoot(DataService),

        // Angular Material
        MatRippleModule,
        MatButtonModule,
        MatButtonToggleModule
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: UrlInterceptor, multi: true},
    ],
    exports: [
        QuickViewComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
