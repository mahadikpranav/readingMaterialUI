import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataservice.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  checkboxStatus: any;
  href: string;
  isBookRequest: Boolean;
  books: any;
  constructor(
    private _dataservice: DataService,
    private _location: Location,
    private _router: Router
  ) {
    this.checkboxStatus = false;
    this.href = _location.path();
    if (this.href == '/searchbooks') {
      this.isBookRequest = true;
    } else {
      this.isBookRequest = false;
    }
  }
  ngOnInit(): void {}

 onSubmit(data: any) {
    if (this.isBookRequest) {
      if (data.isbn != '' && !this.checkboxStatus) {
        console.log(data.isbn);
        this._dataservice.getBookByISBN(data.isbn).subscribe((data:any) => {
          this.books =  data;
        });
      } else if (data.authorEmail != '') {
        this._dataservice
          .getBookByAuthor(data.authorEmail)
          .subscribe((data) => {
            console.log(data);
            this.books = data;
          })
      } else {
        throw console.error('Enter valid search critera');
      }
    } else {
      if (data.isbn != '' && !this.checkboxStatus) {
        this._dataservice.getMagazineByISBN(data.isbn).subscribe((data) => {
          this.books = data;
        });
      } else if (data.authorEmail != '') {
        this._dataservice
          .getMagazineByAuthor(data.authorEmail)
          .subscribe((data) => {
            this.books = data;
          });
        console.log(this.books);
      } else {
        throw console.error('Enter valid search critera');
      }
    }
  }
  checkClick() {
    this.checkboxStatus = !this.checkboxStatus;
  }
}
