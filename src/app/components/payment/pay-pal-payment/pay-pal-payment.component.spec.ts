import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayPalPaymentComponent } from './pay-pal-payment.component';

describe('PayPalPaymentComponent', () => {
  let component: PayPalPaymentComponent;
  let fixture: ComponentFixture<PayPalPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayPalPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayPalPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
