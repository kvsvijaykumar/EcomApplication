import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/user-login/services/user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    public _name : String = '';

  constructor(private _userService : UserDataService,private route :Router) { }

  ngOnInit(): void {
  }

  isLoggedIn()
  {
    if(this._userService.isSignedIn())
    this._name = this._userService.getName();
    return this._userService.isSignedIn();
  }
  navi(){
    if(this._userService.getType()=='customer'){
      this.route.navigate(['customer-pages/dash']);
    }
    else{
      this.route.navigate(['seller-pages/dash']);
    }
  }

  signOut(){
    this._userService.signOutUser();
    this.route.navigate(['/']);
  }
}
