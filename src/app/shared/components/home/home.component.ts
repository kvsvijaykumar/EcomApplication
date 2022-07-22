import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/user-login/services/user-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name = '';

  constructor(private _userService : UserDataService) { }

  ngOnInit(): void {
  }

  isLoggedIn(){
    this.name = this._userService.getName();
    return this._userService.isSignedIn();
  }

}
