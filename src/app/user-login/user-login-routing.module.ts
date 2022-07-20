import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerSigninComponent } from './customer-signin/customer-signin.component';
import { CustomerSignupComponent } from './customer-signup/customer-signup.component';
import { SellerSigninComponent } from './seller-signin/seller-signin.component';
import { SellerSignupComponent } from './seller-signup/seller-signup.component';

const routes: Routes = [
  { path : 'csin', component : CustomerSigninComponent},
  { path : 'ssin', component : SellerSigninComponent},
  { path : 'csup', component : CustomerSignupComponent},
  { path : 'ssup', component : SellerSignupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserLoginRoutingModule { }
