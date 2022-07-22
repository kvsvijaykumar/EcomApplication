import { Component, OnInit } from '@angular/core';
import { ProductsDataService } from '../../services/products-data.service';
import { product,nullProduct } from 'src/assets/userSearch/products';
import { UserDataService } from 'src/app/user-login/services/user-data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  prod = nullProduct;
  sellerName = '';
  sellerAddress = '';
  constructor(private _productService : ProductsDataService, private _userService : UserDataService) {
    this.prod = this._productService.getProDet();
    this.sellerName = this._userService.getName();
    this.sellerAddress = this._userService.getAddress();
   }

  ngOnInit(): void {
  }

}
