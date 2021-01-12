import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { WalletPaymentComponent } from './components/payment/wallet-payment/wallet-payment.component';
import { PayPalPaymentComponent } from './components/payment/pay-pal-payment/pay-pal-payment.component';
import { PaymentSuccessComponent } from './components/payment/payment-success/payment-success.component';

import {PaymentComponent} from './components/payment/payment.component';
import { WalletTopupSuccessComponent } from './components/wallet/wallet-topup-success/wallet-topup-success.component';
import { WalletTopupComponent } from './components/wallet/wallet-topup/wallet-topup.component';

import { EditComponent } from './components/myprofile/edit/edit.component';
import { HeaderComponent } from './components/header/header.component';
import { BuslistComponent } from './components/Searchbus/buslist/buslist.component';
import { ProfileComponent } from './components/myprofile/profile/profile.component';
import { BookingsComponent } from './components/bookings/bookings.component';


const routes: Routes = [

  { path: '', component: DashboardComponent },
  { path: 'wallet', component:  WalletComponent  },
  { path: 'walletPayment', component: WalletPaymentComponent },
  { path: 'paypal', component: PayPalPaymentComponent },
  { path: 'paymentSuccess', component: PaymentSuccessComponent },

  { path: 'payment', component: PaymentComponent },
  { path: 'walletTopup/:amount/:id', component: WalletTopupComponent },
  { path: 'topupSuccess', component: WalletTopupSuccessComponent },

  { path: 'edit/:email', component: EditComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'profile/:email', component: ProfileComponent },
  { path: 'book/:id', component: BookingsComponent },
  { path: 'buslist/:from/:to/:traveldate', component: BuslistComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardComponent]