import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.css']
})
export class UpdateAuthorComponent implements OnInit {

  Authoritem={
    poet:'',
    description:'',
    works:'',
    image:''
  }

  constructor(private router:Router,private authorService:AuthorService) { }

  ngOnInit(): void {

    let authorId = localStorage.getItem("editAuthorId");
    console.log(authorId)
    console.log('recvd')
    this.authorService.getAuthor(authorId).subscribe((data)=>{
      this.Authoritem=JSON.parse(JSON.stringify(data));
  })
  }
  editAuthor()
  {    
    this.authorService.editAuthor(this.Authoritem);   
    alert("Success");
    this.router.navigate(['authors']);
  }

  }


