import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'phone',
  templateUrl: 'phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {
  @Input() phone;
  constructor() { }

  ngOnInit() { 

  }

}