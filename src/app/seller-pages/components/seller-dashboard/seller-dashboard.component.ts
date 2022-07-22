import { Component, OnInit } from '@angular/core';
import Products from 'src/assets/userSearch/products.json';
import { product, nullProduct } from 'src/assets/userSearch/products';
import { UserDataService } from 'src/app/user-login/services/user-data.service';
import { ProductsDataService } from 'src/app/customer-pages/services/products-data.service';

@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.css']
})
export class SellerDashboardComponent implements OnInit {

  prod = Products;
  link = '';
  constructor(private _userService: UserDataService, private _prodService: ProductsDataService) {
  }

  ngOnInit(): void {
  }

  isThisShop(checkProduct: product) {
    if (checkProduct.shopId == this._userService.getId())
      return true;
    return false;
  }

  getLink(prod: product) {
    this.link = prod.imgLink;
    return true;
  }

  getProducts() {
    this.prod = this._prodService.getProducts();
    for (var eachProd of this.prod) {
      if (eachProd.shopId != this._userService.getId()) {
        this.prod = this.prod.filter(obj => obj != eachProd );
      }
    }
  }
}