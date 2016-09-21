import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'phone-list',
  templateUrl: 'phoneList.component.html',
  styleUrls:['./phoneList.component.scss']
}) 
export class PhoneListComponent implements OnInit {
  @Input() phones;
  constructor() { }

  ngOnInit() {
  }

}