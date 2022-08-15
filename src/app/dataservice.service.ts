import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  getReadingMaterial() {
    return this.http.get('https://readingmaterialapi.herokuapp.com/');
  }

  getAllBooks() {
    return this.http.get('https://readingmaterialapi.herokuapp.com/books');
  }

  getAllMagazines() {
    return this.http.get('https://readingmaterialapi.herokuapp.com/magazines');
  }

  getBookByISBN(isbn: String) {
    return this.http.get(
      'https://readingmaterialapi.herokuapp.com/books/' + isbn
    );
  }
  getMagazineByISBN(isbn: String) {
    return this.http.get(
      'https://readingmaterialapi.herokuapp.com/magazines/' + isbn
    );
  }

  getBookByAuthor(authorId: String) {
    console.log(authorId);

    return this.http.post('https://readingmaterialapi.herokuapp.com/books/', {
      email: authorId,
    });
  }

  getMagazineByAuthor(authorId: String) {
    console.log(authorId);
    return this.http.post(
      'https://readingmaterialapi.herokuapp.com/magazines/',
      { email: authorId }
    );
  }

  addbook(data:any){
    return this.http.post(
      'https://readingmaterialapi.herokuapp.com/books/add',
      [{
        title: data.title,
        isbn: data.isbn,
        authors: data.authors,
        description: data.description
      }]);
    
  }
  addmagazine(data:any){
    return this.http.post(
      'https://readingmaterialapi.herokuapp.com/magazines/add',
      [{
        title: data.title,
        isbn: data.isbn,
        authors: data.authors,
        publishedAt: data.publishedAt
      }]
    );
  }
}
