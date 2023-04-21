import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //  userData = {
  //  email :'test@gmail.com',
  //  password :'Test@123',
  //  userName  :'Test',
  //   cnfPass  : 'Test@123'  
  //  }
  constructor(private _http  : HttpClient) {
    // this.registerUser(this.userData).subscribe(data=> console.log(data));
    // this.registerUser(this.userData)
   }

   _url  = '';

  registerUser(userData:User){ 


     let email = userData.email.substring(0, userData.email.indexOf('@'));
     console.log(email);      
     return this._http.put(`https://angular-quizdb-default-rtdb.firebaseio.com/users/${email+""}.json`, userData);
  }
}
