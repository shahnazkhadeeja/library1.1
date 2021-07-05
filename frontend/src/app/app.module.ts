import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule,HTTP_INTERCEPTORS}from  '@angular/common/http';
import { FormsModule, NgModel } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder,Validators} from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { SignService } from './sign.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { UpdateBookComponent } from './update-book/update-book.component';
import { AuthorsComponent } from './authors/authors.component';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { UpdateAuthorComponent } from './update-author/update-author.component';
import { SinglebookComponent } from './singlebook/singlebook.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    BooksComponent,
      AddbookComponent,
      UpdateBookComponent,
      AuthorsComponent,
      AddauthorComponent,
      UpdateAuthorComponent,
      SinglebookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  
  ],
  providers: [AuthService,AuthGuard,SignService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
