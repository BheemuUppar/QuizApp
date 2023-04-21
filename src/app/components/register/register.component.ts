import { Component, OnInit } from '@angular/core';
import {FormGroup,  FormControl, Validators} from '@angular/forms'
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service  : UserService) { }

  ngOnInit(): void {
  }

  registerForm =  new FormGroup(
    {
      name  : new FormControl('', [Validators.required , Validators.pattern("^[a-zA-Z]+$")]),
      email  :  new FormControl('', [Validators.required, Validators.email]),
      password  : new FormControl('',[ Validators.required, Validators.minLength(6),  Validators.maxLength(15),Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,}$")   ],),
      cnfPass   : new FormControl('', [Validators.required,Validators.minLength(6),  Validators.maxLength(15)]),
    }

  );



  register(){
  
    var cnfPass =  this.registerForm.get('cnfPass')?.value;
  
    var obj  :any = {
      "name" : this.registerForm.get('name')?.value,
      "email" : this.registerForm.get('email')?.value.toLowerCase(),
      "password" : this.registerForm.get('password')?.value,
    }

    if(obj.password !== cnfPass){
      alert("password didn't matched!");
    }
    else{
      this.service.registerUser(obj).subscribe();;
      alert("Registration Successfull!!.. please login to continue")
      location.reload();

    }
  }
}
