import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/user-login/services/user-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    public _name : String = '';

  constructor(private _userService : UserDataService,) { }

  ngOnInit(): void {
  }

  isLoggedIn()
  {
    if(this._userService.isSignedIn())
    this._name = this._userService.getName();
    return this._userService.isSignedIn();
  }

}
