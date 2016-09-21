import { Component, OnInit } from '@angular/core';
import {PhoneService} from './services/phone.service';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  _phones = [];
  orderProp;
  query;
  constructor(private phoneService: PhoneService) { }

  ngOnInit() { 
    this.phoneService.getPhones()
      .subscribe(
        phones => this.phones = phones
      );
  }

  get phones(): any[] {
    return this._phones.sort((a: any, b: any): number => {
      const aval = a[this.orderProp];
      const bval = b[this.orderProp];

      return aval < bval ? -1 : (aval === bval ? 0 : 1);
    });
  }

  set phones(val: any[]) {
    this._phones = val;
  }

}