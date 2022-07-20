import { Injectable } from '@angular/core';
import Users from './users.json';
import { User, nullUser} from './users';

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
  constructor() { }
}
