import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class LoginService {

  users =[];
  constructor(private http: HttpClient ) {
    
 
  }

  _url = 'https://angular-quizdb-default-rtdb.firebaseio.com/users.json';
 login() {
  return  this.http.get(this._url);
  // return this.users;
  }
  

}
