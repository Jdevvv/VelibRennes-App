import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VelibListComponent } from './components/velib-list/velib-list.component';
import { VelibMapComponent } from './components/velib-map/velib-map.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './partials/header/header.component';

import { AgmCoreModule } from '@agm/core'

@NgModule({
  declarations: [
    AppComponent,
    VelibListComponent,
    VelibMapComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBLqDH9fSg_yuMc02PWPFXGfGnkm9t1z_g'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
