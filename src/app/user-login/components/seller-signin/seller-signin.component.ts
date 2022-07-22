import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';
import { Router } from '@angular/router';
import { Login } from '../../models/login..model';

@Component({
  selector: 'app-seller-signin',
  templateUrl: './seller-signin.component.html',
  styleUrls: ['./seller-signin.component.css']
})
export class SellerSigninComponent implements OnInit {

  loginCh =true;

  constructor(private userService :UserDataService, private route : Router)  { }

  ngOnInit(): void {
  }
  submit(login: Login){
    let checkUser = {
      id : '',
      username : login.form.value.user,
      phone : '',
      emailid : '',
      gender : '',
      address : '',
      name : '',
      password : login.form.value.pass,
      type : 'seller'
    };
    this.loginCh=this.userService.authentication(checkUser);
    if(this.loginCh){
      this.route.navigate(['seller-pages/dash']);
    }
  }

  loginCheck(){
    return this.loginCh;
  }
}
