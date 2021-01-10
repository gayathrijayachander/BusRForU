import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletTopupSuccessComponent } from './wallet-topup-success.component';

describe('WalletTopupSuccessComponent', () => {
  let component: WalletTopupSuccessComponent;
  let fixture: ComponentFixture<WalletTopupSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalletTopupSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletTopupSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
