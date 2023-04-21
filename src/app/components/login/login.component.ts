import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { NavComponent } from '../nav/nav.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  
  constructor(private loginService: LoginService, private router: Router, ) {
    // localStorage.clear()
  }

  userData: any = [];
  ngOnInit(): void {
    this.loginService.login().subscribe((data: any) => {
      
      for (const key in data) {
           this.userData.push(data[key]);
      }
      console.log(this.userData)
    });
    // this.userData =  this.loginService.login().subscribe();
   
    
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  isLoggedIn: boolean = false;
  userName = '';

login() {
    console.log(this.userData)
    if (this.isValid()) {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigateByUrl('/subjects');
      
      // setTimeout(()=>{
      //   location.reload();

      // }, 50)
      // location.reload();
      
    }
    else{
      alert("invalid username or password");
    }
  }
  
  isValid() {
    var email = this.loginForm.get('email')?.value;
    var password = this.loginForm.get('password')?.value;
    console.log(this.userData);
    for (let data of this.userData) {
      if (data.email == email && data.password == password) {
        localStorage.setItem('currentUser', data.name);
        // new NavComponent().currentUser = data.name;
        console.log(data.name)
       
        return true;
      }
      // console.log(email);  console.log(data.email);
    }
    return false;
  }



}
