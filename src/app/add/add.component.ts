import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataservice.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  href: String = '';
  isbook: boolean = true;
  constructor(private _dataservice: DataService, private _location: Location) {
    this.href = _location.path();
    if (this.href == '/addmagazines') {
      this.isbook = false;
    }
  }

  ngOnInit(): void {}

  onSubmit(data: any) {
    if (this.isbook) {
      this._dataservice
        .addbook({
          title: data.title,
          isbn: data.isbn,
          authors: data.authorEmail,
          description: data.description,
        })
        .subscribe((data) => {
          console.log(data);
        });
    } else {
      this._dataservice
        .addmagazine({
          title: data.title,
          isbn: data.isbn,
          authors: data.authorEmail,
          publishedAt: data.publishedAt,
        })
        .subscribe((data) => {
          console.log(data);
        });
    }
  }
}
