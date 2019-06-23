import { Component, OnInit } from '@angular/core';
import { FormControl,ValidationErrors,FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
 //import { CookieService } from 'ngx-Cookie-Service';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
  
})
export class LoginComponent implements OnInit {

  submitted=false;
  constructor(public cookie:CookieService, public reg_ser: RegisterService ) { }
  signupForm:FormGroup;
  ngOnInit() {
    
    this.signupForm = new FormGroup({
      
      'username' : new FormControl(null,Validators.required),
      'password' : new FormControl(null,Validators.required),
      
    });
  }

  OnSubmit(){
    this.submitted=true;

    if(this.signupForm.invalid)
    {
      return ;
    }
    console.log(this.signupForm);
    this.reg_ser.loginData(this.signupForm.value);
  }
}


