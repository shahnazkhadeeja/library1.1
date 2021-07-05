import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 User={
   email:'',
   password:''
 }
 constructor(private _auth: AuthService,
  private _router:Router,private fb:FormBuilder) { }


  ngOnInit(): void {
    
  }
  loginUser()
  {
    this._auth.loginUser(this.User)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        alert("Success");
        this._router.navigate(['/books'])
      },
      err => {
        console.log(err);
        alert("Kindly Enter Valid ADMIN credentials!!!!");
        this._router.navigate(['home'])
      }
    ) 
  }

    
  }


