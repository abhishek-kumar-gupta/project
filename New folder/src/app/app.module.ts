import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import {  CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterService } from './register.service';
import { AuthGuard } from 'src/app/auth.guard';


//import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'register',
        component: RegisterComponent
      },


      {
        path: 'login',
        component: LoginComponent
      },


      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate:[AuthGuard]
      },
      

      {
        path: '',
        component: HomeComponent
      }


    
    ])
  ],
  providers: [RegisterService,CookieService,AuthGuard
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

