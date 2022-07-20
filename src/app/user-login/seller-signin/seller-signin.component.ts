import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-seller-signin',
  templateUrl: './seller-signin.component.html',
  styleUrls: ['./seller-signin.component.css']
})
export class SellerSigninComponent implements OnInit {

  loginCh =true;

  constructor(private userService :UserDataService) { }

  ngOnInit(): void {
  }
  submit(login: { form: { value: any; }; }){
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
  }

  loginCheck(){
    return this.loginCh;
  }
}
