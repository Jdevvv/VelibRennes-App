import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VelibListComponent } from './components/velib-list/velib-list.component';
import { VelibMapComponent } from './components/velib-map/velib-map.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './partials/header/header.component'; 

import { AgmCoreModule } from '@agm/core';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { FooterComponent } from './partials/footer/footer.component';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    VelibListComponent,
    VelibMapComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBLqDH9fSg_yuMc02PWPFXGfGnkm9t1z_g'
    })
  ],
  providers: [{provide: LOCALE_ID, useValue: "fr-CA" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
