import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PhoneService } from '../../services/phone.service';
import './phoneDetails.component.scss';

@Component({
  selector: 'phone-details',
  templateUrl: 'phoneDetails.component.html',
  styleUrls: ['./phoneDetails.component.scss']
})
export class PhoneDetailsComponent implements OnInit {
  @Input() phoneName = 'dell-venue';
  phone;
  mainImageUrl;
  constructor(private phoneService: PhoneService, private route: ActivatedRoute){}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = params['id'];
      this.phoneService.getPhone(id).subscribe((phone) => {
        this.phone = phone;
        this.mainImageUrl = phone.images[0];
      });
    });
  }
}
