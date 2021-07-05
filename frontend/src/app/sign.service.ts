import { HttpClient,HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignService {
  item={
    fname:'',
    email:'',
    password:'',
    confirm_password:''
  }
     
  constructor(private http:HttpClient) { }
  // getSigndata(){
  // return this.http.get("http://localhost:5500/signup");
  //  }
  newSigndata(item:any)
  {
    return this.http.post("http://localhost:5500/insert",{"item":item})
   .subscribe(data => {
       console.log(data);
    })
  }
}

