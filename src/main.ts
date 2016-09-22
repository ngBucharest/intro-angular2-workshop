import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app/app.component';
import { routing, appRoutingProviders }  from './app/app.routing';

import { AppModule } from './app/app.module'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppModule,
    routing,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    appRoutingProviders,
  ],
  bootstrap: [ AppComponent ]
})
export class MainModule { }

platformBrowserDynamic().bootstrapModule(MainModule);
