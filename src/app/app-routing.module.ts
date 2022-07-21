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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
