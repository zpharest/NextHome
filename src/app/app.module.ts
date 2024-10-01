import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppStoreModule } from 'src/store/AppStoreModule';
import { StoreModule, StoreRootModule } from '@ngrx/store';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [AppComponent,
    LoadingComponent
  ],
  imports: [BrowserModule, IonicModule.forRoot(), ...AppStoreModule, StoreDevtoolsModule.instrument({maxAge:25}),
  AppRoutingModule, ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
