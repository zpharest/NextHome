import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteDonationPage } from './delete-donation.page';

describe('DeleteDonationPage', () => {
  let component: DeleteDonationPage;
  let fixture: ComponentFixture<DeleteDonationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDonationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
