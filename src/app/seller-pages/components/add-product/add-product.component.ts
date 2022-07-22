import { Component, OnInit } from '@angular/core';
import { Login } from '../../models/login..model';
import { UserDataService } from 'src/app/user-login/services/user-data.service';
import { ProductsDataService } from 'src/app/customer-pages/services/products-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  id = '';

  constructor(private _prodService : ProductsDataService,private _userService : UserDataService, private router : Router) { }

  ngOnInit(): void {
  }

  submit(login : Login) {
    this.id = this._userService.getId();
    let newPro = {
      shopId : this.id,
      productName : login.form.value.prname,
      description : login.form.value.prdesc,
      proudctId : login.form.value.prid,
      imgLink: login.form.value.primglink,
      price : login.form.value.prprice,
      stock : login.form.value.prprice,
    }
    this._prodService.addProduct(newPro);
    this.router.navigate(['seller-pages/dash']);
  }
}
