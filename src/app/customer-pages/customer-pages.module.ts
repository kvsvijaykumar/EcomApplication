import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerPagesRoutingModule } from './customer-pages-routing.module';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';


@NgModule({
  declarations: [
    CustomerDashboardComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    CustomerPagesRoutingModule
  ]
})
export class CustomerPagesModule { }
