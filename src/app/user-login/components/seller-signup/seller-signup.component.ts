import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-seller-signup',
  templateUrl: './seller-signup.component.html',
  styleUrls: ['./seller-signup.component.css']
})
export class SellerSignupComponent implements OnInit {

  constructor(private _userServices : UserDataService)  { }

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
    this._userServices.signUp(checkUser);
  }
}
