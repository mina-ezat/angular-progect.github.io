import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  appUser
  constructor( private auth:AuthService) { 
    this.auth.AppUser$.subscribe(user=> {
      this.appUser = user
    } )
  }

  ngOnInit(): void {
  }

}
