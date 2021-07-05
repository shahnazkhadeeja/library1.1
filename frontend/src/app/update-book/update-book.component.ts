import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  Bookitem={
    title:'',
    author:'',
    genre:'',
    image:''
  }

  constructor(private router:Router,private bookService:BookserviceService) { }

  ngOnInit(): void {
    let bookId = localStorage.getItem("editBookId");
    this.bookService.getBook(bookId).subscribe((data)=>{
      this.Bookitem=JSON.parse(JSON.stringify(data));
      console.log('editcalled');
  })
  }
  editBook()
  {    
    this.bookService.editBook(this.Bookitem);   
    alert("Success");
    this.router.navigate(['books']);
  }

}
