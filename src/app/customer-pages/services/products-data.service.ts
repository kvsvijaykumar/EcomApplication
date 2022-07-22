import { Injectable } from '@angular/core';
import { product,nullProduct } from 'src/assets/userSearch/products';
import Products from 'src/assets/userSearch/products.json';

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {

  private _products = Products;
  private _proDetPage = nullProduct;

  constructor() { }

  setProDet(proDet : product){
    this._proDetPage = proDet;
  }

  getProDet(){
    return this._proDetPage;
  }

  getProducts(){
    return this._products;
  }

  addProduct(newProd : product){
    this._products.push(newProd);
  }
}
