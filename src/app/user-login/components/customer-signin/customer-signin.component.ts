import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-customer-signin',
  templateUrl: './customer-signin.component.html',
  styleUrls: ['./customer-signin.component.css']
})
export class CustomerSigninComponent implements OnInit {

  loginCh = true;

  constructor(private userService : UserDataService) { }

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
      type : 'customer'
    };
    this.loginCh=this.userService.authentication(checkUser);
  }

  loginCheck(){
    return this.loginCh;
  }
}
