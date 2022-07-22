import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileViewComponent } from './components/profile-view/profile-view.component';

const routes: Routes = [
  { path : 'profile', component : ProfileViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilePagesRoutingModule { }
