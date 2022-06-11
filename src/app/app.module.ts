import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { Slide1Component } from './slide1/slide1.component';
import { ClipboardModule } from 'ngx-clipboard';
import { Slide2Component } from './slide2/slide2.component';
import { EmitterComponent } from './emitter/emitter.component';
import { ChangeNumberComponent } from './change-number/change-number.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { BuscaCarroComponent } from './busca-carro/busca-carro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Slide1Component,
    Slide2Component,
    EmitterComponent,
    ChangeNumberComponent,
    TwoWayBindingComponent,
    BuscaCarroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    ClipboardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
