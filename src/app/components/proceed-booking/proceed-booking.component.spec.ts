import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceedBookingComponent } from './proceed-booking.component';

describe('ProceedBookingComponent', () => {
  let component: ProceedBookingComponent;
  let fixture: ComponentFixture<ProceedBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProceedBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProceedBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
