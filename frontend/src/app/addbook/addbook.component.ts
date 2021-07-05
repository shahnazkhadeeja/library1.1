import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../bookservice.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private bookService: BookserviceService,private router: Router) { }

  Bookitem={
    title:'',
    author:'',
    genre:'',
    image:''
  }
  
  ngOnInit(): void {



  }
  Addbook()
  {    
    this.bookService.newbook(this.Bookitem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['books']);
  }
}


