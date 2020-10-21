import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'last-app';
  constructor(
    private auth:AuthService,
    private rout:ActivatedRoute,
    private router:Router,
    private userserv:UserService
    ){
  this.auth.user$.subscribe(user =>{
    if(user){
      this.userserv.save(user)
      let routurUrl = this.rout.snapshot.queryParamMap.get('returnUrl')
      router.navigateByUrl(routurUrl)
    } 
  })
  }
}
