import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app/app.component';
// import { PhoneListComponent } from './app/components/phone-list.component';
// import { PhoneDetailComponent } from './app/components/phone-detail.component';
// import { PhoneFilterPipe } from './app/components/phone-filter.pipe';
// import { CheckmarkPipe } from './app/components/checkmark.pipe';
// import { PhoneService } from './app/services/phone.service';
// import { routing, appRoutingProviders }  from './app/app.routing';

import { AppModule } from './app/app.module'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppModule,
    
    // routing,
  ],
  declarations: [
    AppComponent,
    // PhoneListComponent,
    // PhoneDetailComponent,
    // PhoneFilterPipe,
    // CheckmarkPipe,
  ],
  providers: [
    // PhoneService,
    // appRoutingProviders,
  ],
  bootstrap: [ AppComponent ]
})
export class MainModule { }

platformBrowserDynamic().bootstrapModule(MainModule);
