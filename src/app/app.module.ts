import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';





import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppStoreModule } from 'src/store/AppStoreModule';
import { StoreModule, StoreRootModule } from '@ngrx/store';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LoadingComponent } from './components/loading/loading.component';


import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent,
    LoadingComponent
  ],

  imports: [HttpClientModule ,BrowserModule,FormsModule, IonicModule.forRoot(), ...AppStoreModule, StoreDevtoolsModule.instrument({maxAge:25}),
  AppRoutingModule, ],


  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}