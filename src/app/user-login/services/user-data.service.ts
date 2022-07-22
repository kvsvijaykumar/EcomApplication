import { Injectable } from '@angular/core';
import Users from 'src/assets/userSearch/users.json';
import { User, nullUser} from 'src/assets/userSearch/users';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private _signin : Boolean = false;
  private _currentUser : User = nullUser;
  private _usersData = Users;
  
  isSignedIn(){
    return this._signin;
  }

  authentication(isUser : User){
    console.log(isUser);
    let newuser = this._usersData.find((obj)=>{
      return obj.username==isUser.username && obj.password==isUser.password && obj.type==isUser.type;
    }
    );

    if(newuser){
      this._signin = true;
      this._currentUser = newuser;

      localStorage.setItem('auth', String(this._signin));
      localStorage.setItem('user', JSON.stringify(this._currentUser))
      return true;
    }
    return false;
  }

  getName(){
    return this._currentUser.name;
  }

  signUp(signUser : User){
    console.log(signUser);
  }

  getId(){
    return this._currentUser.id;
  }

  getType(){
    return this._currentUser.type;
  }

  getAddress(){
    return this._currentUser.address;
  }

  getEmail(){
    return this._currentUser.emailid;
  }

  getPhone(){
    return this._currentUser.phone;
  }

  getGender(){
    return this._currentUser.gender;
  }

  userChanges(userUpdate : User){
    this._currentUser = userUpdate;
  }

  signOutUser(){
    this._currentUser = nullUser;
    this._signin = false;
    localStorage.setItem('auth', String(this._currentUser));
  }
  constructor() { 
    //fetching auth variable from local storage
    let lsAuth = localStorage.getItem('auth');
    if(lsAuth)
    {
      this._signin = Boolean(lsAuth=="true");
    }
    else{
      this._signin = false;
    }

    //fetching users data from local storage
    let lsUser = localStorage.getItem('user');
    if(lsUser)
    {
      this._currentUser = JSON.parse(lsUser);
    }
    else{
      this._currentUser = nullUser;
    }
  }
}
