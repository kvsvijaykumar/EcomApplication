import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';
import { User } from 'src/assets/userSearch/users';
import { Login } from '../../models/login..model';

@Component({
  selector: 'app-customer-signup',
  templateUrl: './customer-signup.component.html',
  styleUrls: ['./customer-signup.component.css']
})
export class CustomerSignupComponent implements OnInit {

  constructor(private _userService : UserDataService) { }

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
    this._userService.signUp(checkUser);
  }
}
