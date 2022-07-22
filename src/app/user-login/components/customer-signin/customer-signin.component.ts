import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../../models/login..model';

import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-customer-signin',
  templateUrl: './customer-signin.component.html',
  styleUrls: ['./customer-signin.component.css']
})
export class CustomerSigninComponent implements OnInit {

  loginCh = true;

  constructor(private userService : UserDataService,private route : Router) { }

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
      type : 'customer'
    };
    this.loginCh=this.userService.authentication(checkUser);
    if(this.loginCh)
      this.route.navigate(['customer-pages/dash']);
  }

  loginCheck(){
    return this.loginCh;
  }
}
