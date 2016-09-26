import { Component, OnInit } from '@angular/core';
import {PhoneService} from '../../services/phone.service';

@Component({
  selector: 'phone-list-view',
  templateUrl: 'phoneListView.component.html',
})
export class PhoneListViewComponent implements OnInit {
  _phones: any[] = [];
  orderProp: string = 'name';
  query: string = '';
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
