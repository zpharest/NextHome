import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DonationDetailsPage } from './donation-details.page';

describe('DonationDetailsPage', () => {
  let component: DonationDetailsPage;
  let fixture: ComponentFixture<DonationDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
