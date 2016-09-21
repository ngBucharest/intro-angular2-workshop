import { Component, Input } from '@angular/core';
import { PhoneService } from './phone.service';

@Component({
  selector: 'phone-list',
  templateUrl: 'phone-list.template.html',
})
export class PhoneListComponent {
  query: string;
  _orderProp: string;
  _phones: any[];

  constructor(private phoneService: PhoneService) {
    this.orderProp = 'name';
    this.phones = [];

    this.getPhones();
  }

  getPhones() {
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

  get orderProp(): string {
    return this._orderProp;
  }

  @Input()
  set orderProp(val: string) {
    this._orderProp = val;
  }
}