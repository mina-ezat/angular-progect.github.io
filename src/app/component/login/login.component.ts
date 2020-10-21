import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../service/auth.service';
import * as firebase from "firebase";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private auth:AuthService) { 
  }

  ngOnInit(): void {
  }
 Submit(test){
  // this.fire.adduser(test.value)
  console.log("good",test.value)
 }
 loginGoogle(){
   this.auth.loginGo()
 }
}
