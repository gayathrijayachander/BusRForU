import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { WalletPaymentComponent } from './components/payment/wallet-payment/wallet-payment.component';
import { PayPalPaymentComponent } from './components/payment/pay-pal-payment/pay-pal-payment.component';
import { PaymentSuccessComponent } from './components/payment/payment-success/payment-success.component';

const routes: Routes = [

  { path: '', component: DashboardComponent },
  { path: 'wallet', component:  WalletComponent  },
  { path: 'walletPayment', component: WalletPaymentComponent },
  { path: 'paypal', component: PayPalPaymentComponent },
  { path: 'paymentSuccess', component: PaymentSuccessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardComponent]