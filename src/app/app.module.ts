import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PaymentComponent } from './components/payment/payment.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { HttpClientModule } from '@angular/common/http';
import { WalletPaymentComponent } from './components/payment/wallet-payment/wallet-payment.component';
import { PayPalPaymentComponent } from './components/payment/pay-pal-payment/pay-pal-payment.component';
import { FormsModule } from '@angular/forms';
import { PaymentSuccessComponent } from './components/payment/payment-success/payment-success.component';
import {NgxPrintModule} from 'ngx-print';
import { WalletTopupSuccessComponent } from './components/wallet/wallet-topup-success/wallet-topup-success.component';
import { WalletTopupComponent } from './components/wallet/wallet-topup/wallet-topup.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routingComponents,
    PaymentComponent,
    WalletComponent,
    WalletPaymentComponent,
    PayPalPaymentComponent,
    PaymentSuccessComponent,
    WalletTopupSuccessComponent,
    WalletTopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPrintModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
