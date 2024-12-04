import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-donation-details',
  templateUrl: './donation-details.page.html',
  styleUrls: ['./donation-details.page.scss'],
})
export class DonationDetailsPage implements OnInit {
  donation: any;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params && params['donation']) { // Acesso seguro com colchetes
        this.donation = JSON.parse(params['donation']); // Acesso seguro com colchetes
      }
    });
  }
}
