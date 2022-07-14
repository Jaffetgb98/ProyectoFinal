import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { NavbarComponent } from './navbar/navbar.component';
import { PrincipalComponent } from './principal/principal.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { Enlace1Component } from './enlace1/enlace1.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PrincipalComponent,
    TarjetasComponent,
    Enlace1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
