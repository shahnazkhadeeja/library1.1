import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { ActivatedRoute,Router } from '@angular/router';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {

  authors=[{
    poet:'',
    description:'',
    works:'',
    image:'',


  }]

  constructor(private router:Router,private authorService: AuthorService,public _auth:AuthService) { }

  ngOnInit(): void {

    this.authorService.getAuthors().subscribe((data)=>{
      this.authors=JSON.parse(JSON.stringify(data));
  })
  }

  editAuthor(author:any)
  {
    localStorage.setItem("editAuthorId", author._id.toString());
    console.log(author._id)
    this.router.navigate(['updateauthor']);
    console.log('editcalled from authorpG');

  }
  deleteAuthor(author:any)
  {
    this.authorService.deleteAuthor(author._id)
      .subscribe((data) => {
        this.authors= this.authors.filter(p => p !== author);
      })
  

  }
}
