import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class BookserviceService {
  item= {
    title :'',
     author:'',
    genre:'',
    image:''}

  constructor(private http:HttpClient) { }

  getBook(id:any){
    return this.http.get("http://localhost:5500/books/"+id);
  }
  getBooks(){
    return this.http.get("http://localhost:5500/books");
    
  }

  newbook(item:any)
  {   
    return this.http.post("http://localhost:5500/add",{"book":item})
    .subscribe(data =>{console.log(data)})
  }
  deleteBook(id:any)
  {

    return this.http.delete("http://localhost:5500/remove/"+id)

  }
  editBook(book:any)
  {
    
    return this.http.put("http://localhost:5500/update",book)
    .subscribe(data =>{console.log(data)})
  }
  //  readBook(id:any){
  //   return this.http.get("http://localhost:5500/books/id"+id);
  //  }

}

