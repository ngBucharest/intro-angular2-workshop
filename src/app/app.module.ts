import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule }   from '@angular/common';

import { PhoneComponent } from './components/phone/phone.component';
import { PhoneListComponent } from './components/phoneList/phoneList.component';
import { PhoneDetailsComponent } from './components/phoneDetails/phoneDetails.component';
import { PhoneListViewComponent } from './components/phoneListView/phoneListView.component';

import { PhoneFilterPipe } from './pipes/phone-filter.pipe';
import { CheckmarkPipe } from './pipes/checkmark.pipe';

import { PhoneService } from './services/phone.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    PhoneListComponent,
    PhoneComponent,
    PhoneFilterPipe,
    PhoneDetailsComponent,
    CheckmarkPipe,
    PhoneListViewComponent
  ],
  exports: [ PhoneListViewComponent ],
  providers: [ PhoneService ],
})
export class AppModule { }
