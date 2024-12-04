import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditDonationPage } from './edit-donation.page';

describe('EditDonationPage', () => {
  let component: EditDonationPage;
  let fixture: ComponentFixture<EditDonationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDonationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
