import { Component, Input } from '@angular/core';

@Component({
  selector: 'phone',
  templateUrl: 'phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent {
  @Input() phone;
}