import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Book } from '../common/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = "http://localhost:8080/api/v1/books";
  constructor(private HttpClient: HttpClient) { }
  
  getBooks(): Observable<Book[]>{
    return this.HttpClient.get<GetResponseBooks>(this.baseUrl).pipe(
      map(Response => Response._embedded.books)
    );
  }
}

interface GetResponseBooks{
  _embedded: {
    books: Book[];
  }
}