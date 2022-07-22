import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { SellerDashboardComponent } from './components/seller-dashboard/seller-dashboard.component';

const routes: Routes = [
  { path : 'dash', component : SellerDashboardComponent },
  { path : 'adding', component : AddProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerPagesRoutingModule { }
