import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/user-login/models/login..model';
import { FormGroup,FormControl } from '@angular/forms';
import { UserDataService } from 'src/app/user-login/services/user-data.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {

  id = ';'
  name = '';
  phone = '';
  emailid = '';
  gender = '';
  address = '';
  username = '';
  password = '';
  type = '';

  constructor(private _userService : UserDataService) {
    this.name = this._userService.getName();
    this.phone = this._userService.getPhone();
    this.emailid = this._userService.getEmail();
    this.gender = this._userService.getGender();
    this.address = this._userService.getAddress();
  }

  ngOnInit(): void {
  }
  submit(login: { form: { value: any; }; }){
    console.log(login.form.value);
    }
  }