import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SellerPagesRoutingModule } from './seller-pages-routing.module';
import { SellerDashboardComponent } from './components/seller-dashboard/seller-dashboard.component';
import { AddProductComponent } from './components/add-product/add-product.component';


@NgModule({
  declarations: [
    SellerDashboardComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    SellerPagesRoutingModule,
    FormsModule
  ]
})
export class SellerPagesModule { }
