import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  item=[{
    poet:'',
    description:'',
    works:'',
    image:'',


  }]
  constructor(private http:HttpClient) { }
  getAuthor(id:any){
    console.log('gotauthor id in servuc',id);
    return this.http.get("http://localhost:5500/authors/"+id);
  }
  getAuthors(){
    return this.http.get("http://localhost:5500/authors");
    console.log("hi author reached frontend");
    }

  newAuthor(item:any)
  {   
    return this.http.post("http://localhost:5500/addauthor",{"author":item})
    .subscribe(data =>{console.log(data)})
  }
  deleteAuthor(id:any)
  {

    return this.http.delete("http://localhost:5500/removeauthor/"+id)

  }
  editAuthor(author:any)
  {
    console.log('client auhtoredit called');
    return this.http.put("http://localhost:5500/authors/updateauthor",author)
    .subscribe(data =>{console.log(data)})
  }
}


