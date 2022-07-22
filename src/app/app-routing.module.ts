import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  { path : "shared", loadChildren:()=>import('./shared/shared.module')
    .then((mod)=>mod.SharedModule)
  },
  { path : "user-login", loadChildren:()=>import('./user-login/user-login.module')
    .then((mod)=>mod.UserLoginModule)
  },
  {
    path : "customer-pages", loadChildren:()=>import('./customer-pages/customer-pages.module')
    .then((mod)=>mod.CustomerPagesModule)
  },
  {
    path : "seller-pages", loadChildren:()=>import('./seller-pages/seller-pages.module')
    .then((mod)=>mod.SellerPagesModule)
  },
  {
    path : "profile-pages", loadChildren:()=>import('./profile-pages/profile-pages.module')
    .then((mod)=>mod.ProfilePagesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
