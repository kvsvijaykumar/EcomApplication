import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilePagesRoutingModule } from './profile-pages-routing.module';
import { ProfileViewComponent } from './components/profile-view/profile-view.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProfileViewComponent
  ],
  imports: [
    CommonModule,
    ProfilePagesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProfilePagesModule { }
