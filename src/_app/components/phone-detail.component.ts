import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PhoneService } from './phone.service';

@Component({
  selector: 'phone-detail',
  templateUrl: 'phone-detail.template.html',
})
export class PhoneDetailComponent implements OnInit {
  phone: any;

  constructor(private phoneService: PhoneService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = params['id'];
      this.phoneService.getPhone(id).subscribe(phone => this.phone = phone);
    });
  }
}