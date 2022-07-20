import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserLoginRoutingModule } from './user-login-routing.module';
import { CustomerSigninComponent } from './components/customer-signin/customer-signin.component';
import { SellerSigninComponent } from './components/seller-signin/seller-signin.component';
import { CustomerSignupComponent } from './components/customer-signup/customer-signup.component';
import { SellerSignupComponent } from './components/seller-signup/seller-signup.component';


@NgModule({
  declarations: [
    CustomerSigninComponent,
    SellerSigninComponent,
    CustomerSignupComponent,
    SellerSignupComponent,
  ],
  imports: [
    CommonModule,
    UserLoginRoutingModule,
    FormsModule
  ]
})
export class UserLoginModule { }
