import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../services/authservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
 
  userName:string="";
  password:string="";
  _auth:AuthserviceService;
  errMsg:string="";
 constructor(auth:AuthserviceService, private router:Router) {
  this._auth=auth;
 }

 ngOnInit(): void {
   
 }
 login(){
  
  if(this.userName.trim().length===0)
  {
    this.errMsg="UserName is required";
  }
  else if(this.password.trim().length===0)
  {
    this.errMsg="Password is required";
  }
  else{
    this.errMsg="";
    let result =this._auth.login(this.userName,this.password);
    if(result==200){
      this.router.navigate(['home']);
    }
    if(result==403){
      this.errMsg="Invalid Credentials";
    }
  }
 }
 
}
