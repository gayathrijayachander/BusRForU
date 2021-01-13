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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentSuccessComponent } from './components/payment/payment-success/payment-success.component';
import {NgxPrintModule} from 'ngx-print';
import { WalletTopupSuccessComponent } from './components/wallet/wallet-topup-success/wallet-topup-success.component';
import { WalletTopupComponent } from './components/wallet/wallet-topup/wallet-topup.component';
import { EditComponent } from './components/myprofile/edit/edit.component';
import { ProfileComponent } from './components/myprofile/profile/profile.component';
import { SearchComponent } from './components/Searchbus/search/search.component';
import { BuslistComponent } from './components/Searchbus/buslist/buslist.component';
import { BookingsComponent } from './components/bookings/bookings.component';

import { RegisterComponent } from './components/register/register.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { AddBusComponent } from './components/Admin/add-bus/add-bus.component';
import { DeleteBusComponent } from './components/Admin/delete-bus/delete-bus.component';
import { EditBusComponent } from './components/Admin/edit-bus/edit-bus.component';
import { LoginComponent } from './components/login/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { BookScheduleComponent } from './components/book-schedule/book-schedule.component';
import { ProceedBookingComponent } from './components/proceed-booking/proceed-booking.component';
import { FooterComponent } from './components/footer/footer.component';


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
    WalletTopupComponent,
    EditComponent,
    ProfileComponent,
    SearchComponent,
    BuslistComponent,
    BookingsComponent,
    RegisterComponent,
    ChangePasswordComponent,
   AddBusComponent,
   DeleteBusComponent,
   EditBusComponent,
   LoginComponent,
   ForgotPasswordComponent,
   ResetPasswordComponent,
   BookScheduleComponent,
   ProceedBookingComponent,
   FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPrintModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
