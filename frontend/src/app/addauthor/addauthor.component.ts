import { Component, OnInit } from '@angular/core';
import {AuthorService} from '../author.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addauthor',
  templateUrl: './addauthor.component.html',
  styleUrls: ['./addauthor.component.css']
})
export class AddauthorComponent implements OnInit {

  constructor(private authorService: AuthorService,private router: Router) { }

  Authoritem={
    poet:'',
    description:'',
    works:'',
    image:''
  }

  ngOnInit(): void {
  }
  Addauthor()
  {    
    this.authorService.newAuthor(this.Authoritem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['authors']);
  }
}
