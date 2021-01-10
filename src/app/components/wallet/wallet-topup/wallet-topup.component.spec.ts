import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletTopupComponent } from './wallet-topup.component';

describe('WalletTopupComponent', () => {
  let component: WalletTopupComponent;
  let fixture: ComponentFixture<WalletTopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalletTopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletTopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
