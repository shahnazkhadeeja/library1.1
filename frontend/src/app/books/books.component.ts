import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { ActivatedRoute,Router } from '@angular/router';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  imageWidth: number = 550;
    imageMargin: number = 50;
    //showImage: boolean = false;

  books=[{
    title:'',
    author:'',
    genre:'',
    image:'',
    }]
    
  

    // toggleImage(): void{
    //   this.showImage = !this.showImage;
    //  }

    constructor(private router:Router,private bookService: BookserviceService,public _auth:AuthService){   
    
    }
    ngOnInit(): void{
      this.bookService.getBooks().subscribe((data)=>{
        this.books=JSON.parse(JSON.stringify(data));
    })
    }
   
    editBook(book:any)
    {
      localStorage.setItem("editBookId", book._id.toString());
      this.router.navigate(['update']);
  
    }
    deleteBook(book:any)
    {
      this.bookService.deleteBook(book._id)
        .subscribe((data) => {
          this.books= this.books.filter(p => p !== book);
        })
    
  
    }

    // readBook(book:any)
    // {
    //   console.log('bookcalled');
    //   localStorage.setItem("getBookId", book._id.toString());
    //   this.router.navigate(['/book/:id']);
    // //   let bookId = localStorage.getItem("editBookId");
    // //   this.bookService.getBook(bookId).subscribe((data)=>{
    // //     this.books=JSON.parse(JSON.stringify(data));
    // //     console.log('editcalled');
    // // })
    // }
  }