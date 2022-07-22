import { Component, OnInit } from '@angular/core';
import Products from 'src/assets/userSearch/products.json';
import { product, nullProduct}  from 'src/assets/userSearch/products';
import { ProductsDataService } from '../../services/products-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {

  prod = Products;
  link = "";

  constructor(private _productService : ProductsDataService, private route : Router) { }

  ngOnInit(): void {
  }

  getLink(prod : product){
    this.link = prod.imgLink;
    return true;
  }

  productDetails(prodDet : product){
    this._productService.setProDet(prodDet);
    this.route.navigate(['customer-pages/product']);
  }

}
