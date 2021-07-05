import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AuthGuard } from './auth.guard';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SinglebookComponent } from './singlebook/singlebook.component';
import { UpdateAuthorComponent } from './update-author/update-author.component';
import { UpdateBookComponent } from './update-book/update-book.component';



const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full'
  // },
  {
    path:'login', 
    component:LoginComponent
  },

   {
     path:'signup',
      component:SignupComponent
    },

   {
     path:'',
    component: HomeComponent
  
  },

   {
     path:'books', 
     component: BooksComponent,
     children:[
      {
        path:'id',component:SinglebookComponent
      }]
    },
    {
      path:'update',
      canActivate: [AuthGuard],
     component: UpdateBookComponent
    },

   {
     path:'addbook', 
     canActivate: [AuthGuard],
     component:AddbookComponent
    },
    {
      path:'authors', 
      component: AuthorsComponent
     },
     {
      path:'addauthor', 
      canActivate: [AuthGuard],
      component: AddauthorComponent
     },

     {
      path:'updateauthor', 
      canActivate: [AuthGuard],
      component: UpdateAuthorComponent
     },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  , declarations: []
})
export class AppRoutingModule { }
