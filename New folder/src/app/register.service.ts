import { Injectable } from '@angular/core';
import { CookieService } from  'ngx-cookie-service';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';

@Injectable()
export class RegisterService {

  constructor(public cookie:CookieService,  private router:Router) { }

   savedata(data)
   {
     this.cookie.set("username", data.username);
     this.cookie.set("password", data.password);
     alert("User ");
    //  this.cookie.set("", false);
    return true;

   }


   get()
   {
     return this.cookie.get("username");
   }

   loginData(info)
   {
    //  console.log()
     if(this.cookie.get("username")==info.username && this.cookie.get("password")==info.password)
     {
       this.router.navigate(['/dashboard']);
       this.cookie.set("LogIn","true");

     }
     else{
       alert("Username/Password Incorrect");
       this.router.navigate(['/login']);
     }
   }



   

   check()
   {
     if(this.cookie.get("LogIn"))
     {
       return true;
     }
     else{
       return false;
     }
   }

  
  }

