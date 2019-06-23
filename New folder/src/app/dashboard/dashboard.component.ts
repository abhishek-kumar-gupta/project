import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public cookie:CookieService,private router:Router) { }
     searchTerm: string;
  ngOnInit() {
  }

  deleteCookie()
  {
    this.cookie.set("LogIn","false");
    this.router.navigateByUrl('/register') 
  }

}
