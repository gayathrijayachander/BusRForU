import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { WalletPaymentComponent } from './components/payment/wallet-payment/wallet-payment.component';
import { PayPalPaymentComponent } from './components/payment/pay-pal-payment/pay-pal-payment.component';
import { PaymentSuccessComponent } from './components/payment/payment-success/payment-success.component';
import {RegisterComponent} from './components/register/register.component';
import{ChangePasswordComponent} from './components/change-password/change-password.component';
import{AddBusComponent} from './components/Admin/add-bus/add-bus.component';
import {EditBusComponent} from './components/Admin/edit-bus/edit-bus.component';
import {DeleteBusComponent} from './components/Admin/delete-bus/delete-bus.component';

const routes: Routes = [

  { path: '', component: DashboardComponent },
  { path: 'wallet', component:  WalletComponent  },
  { path: 'walletPayment', component: WalletPaymentComponent },
  { path: 'paypal', component: PayPalPaymentComponent },
  { path: 'paymentSuccess', component: PaymentSuccessComponent },
  {path : 'register',component : RegisterComponent},
  {path : 'change-password',component : ChangePasswordComponent},
  {path : 'add-bus',component : AddBusComponent},
 {​​​​​ path:'edit/:id', component:EditBusComponent }​​​​​,
 {path : 'edit-bus',component : EditBusComponent},
 {path : 'delete-bus',component : DeleteBusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardComponent]