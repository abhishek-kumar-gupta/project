import { Component, OnInit } from '@angular/core';
import { FormControl,ValidationErrors,FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
// import { CookieService } from  'ngx-cookie-service';


import { Validator } from '@angular/forms';
import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';

import { Input } from '@angular/core';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  // providers:[CookieService]
})



export class RegisterComponent implements OnInit {

 submitted=false;

  



  constructor( public cookie:CookieService, public reg_ser: RegisterService  ,private router:Router
  ) { }
  signupForm:FormGroup;
  ngOnInit() {

    this.signupForm = new FormGroup({
      'name' : new FormControl(null,Validators.required),
      'email' : new FormControl(null,[Validators.required,Validators.email]),
      'username' : new FormControl(null,Validators.required),
      'password' : new FormControl(null,Validators.required),
      'confirmpassword' : new FormControl(null,Validators.required)
  },
{
  validators:this.matchingPasswords('password','confirmpassword')
});

}

OnSubmit(){
  console.log(this.signupForm);
  console.log("register method is called");
  this.submitted=true;
  if(this.signupForm.invalid)
  {
    return;
  }

  this.router.navigateByUrl('/login')
  this.reg_ser.savedata(this.signupForm.value) ? 
      this.router.navigateByUrl('/login') : alert('asdasd') 




}
 matchingPasswords(passwordKey: string, confirmpasswordKey: string) {
  return (group: FormGroup): { [key: string]: any } => {
  let password = group.controls[passwordKey];
  let confirmpassword = group.controls[confirmpasswordKey];
  if (password.value !== confirmpassword.value) {
  // console.log(mis);
  return {
  mismatchedPasswords: true
  };
  }
  }
}


}


