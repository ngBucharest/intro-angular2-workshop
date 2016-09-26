import { Component, Input } from '@angular/core';

@Component({
  selector: 'phone-list',
  templateUrl: 'phoneList.component.html',
  styleUrls:['./phoneList.component.scss']
})
export class PhoneListComponent {
  @Input() phones;
}