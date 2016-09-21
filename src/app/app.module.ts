import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PhoneComponent } from './components/phone/phone.component';
import { PhoneListComponent } from './components/phoneList/phoneList.component';
import { PhoneService } from './services/phone.service';
import { CommonModule }   from '@angular/common';
import { PhoneFilterPipe } from './pipes/phone-filter.pipe';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [ PhoneListComponent, PhoneComponent, PhoneFilterPipe ],
  exports: [ PhoneListComponent, PhoneFilterPipe ],
  providers: [ PhoneService ],
})
export class AppModule { }