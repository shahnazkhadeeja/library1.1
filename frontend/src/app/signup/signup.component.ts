import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignService } from '../sign.service';
import { FormBuilder,Validators} from '@angular/forms';
import {ISign} from '../model/signdata'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  data = {
    fname: '',
    password:'',
    email:'',
    confirm_password:''
  }
  
  constructor(private signService: SignService, private router:Router) { }

     ngOnInit(): void {
  }
  Usersign()
  {
    this.signService.newSigndata(this.data);
 console.log("called");
 this.router.navigate(['/']);

  }

}
