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
import {RegisterComponent} from './components/register/register.component';
import{ChangePasswordComponent} from './components/change-password/change-password.component';
import{AddBusComponent} from './components/Admin/add-bus/add-bus.component';
import {EditBusComponent} from './components/Admin/edit-bus/edit-bus.component';
import {DeleteBusComponent} from './components/Admin/delete-bus/delete-bus.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login/login.component';
import { SearchComponent } from './components/Searchbus/search/search.component';
import { ProceedBookingComponent } from './components/proceed-booking/proceed-booking.component';
import { BookScheduleComponent } from './components/book-schedule/book-schedule.component';
import { UserComponent } from './components/MainDashboard/user/user.component';
import { AdminComponent } from './components/MainDashboard/admin/admin.component';
import { EditAdminComponent } from './components/Admin/edit-admin/edit-admin.component';
import { CancelComponent } from './components/cancel/cancel.component';
import { HelpComponent } from './components/help/help.component';

const routes: Routes = [

  { path: '', component: DashboardComponent },
  { path: 'aboutus', component: HelpComponent },
  { path: 'wallet', component:  WalletComponent  },
  { path: 'walletPayment', component: WalletPaymentComponent },
  { path: 'paypal', component: PayPalPaymentComponent },
  { path: 'paymentSuccess', component: PaymentSuccessComponent },
  { path: 'payment/:amount', component: PaymentComponent },
  { path: 'walletTopup/:amount/:id', component: WalletTopupComponent },
  { path: 'topupSuccess', component: WalletTopupSuccessComponent },
  { path: 'edit/:email', component: EditComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'profile/:email', component: ProfileComponent },
  { path: 'book/:email', component: BookingsComponent },
  { path: 'buslist/:from/:to/:traveldate', component: BuslistComponent },
  {path : 'register',component : RegisterComponent},
  {path : 'change-password/:email',component : ChangePasswordComponent},
  {path : 'add-bus',component : AddBusComponent},
 {​​​​​ path: 'edit-bus/:id', component:EditBusComponent }​​​​​,
 {path : 'edit-bus',component : EditBusComponent},
 {path : 'delete-bus',component : DeleteBusComponent},
 { path: 'resetpassword/:mail', component: ResetPasswordComponent },
 { path: 'forgotpassword', component: ForgotPasswordComponent },
 { path: 'login', component: LoginComponent },
 { path: 'search', component: SearchComponent },
 { path: 'bookschedule', component: BookScheduleComponent },
 { path: 'proceedbooking/:seat', component: ProceedBookingComponent },
 {path : 'admin/:email',component : AdminComponent},
 {path : 'user/:email',component : UserComponent},
 {path : 'edit-admin',component : EditAdminComponent},
 { path: 'cancelticket', component: CancelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardComponent]