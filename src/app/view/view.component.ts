import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataservice.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  public href: string = "";
  readingMaterial : any;
  constructor(private _dataservice: DataService,_location: Location,private route: ActivatedRoute) { 
 
    this.href = _location.path();
    // if(this.route.snapshot.paramMap.get('data'))
   
  }

  ngOnInit(): void {
    if(this.href == "/books"){
      this._dataservice.getAllBooks().subscribe((data)=>{
        this.readingMaterial = data;
       });
    }
    else if(this.href == '/magazines'){
      this._dataservice.getAllMagazines().subscribe((data)=>{
        this.readingMaterial = data;
       });
    }
    else{
      this._dataservice.getReadingMaterial().subscribe((data)=>{
        this.readingMaterial = data;
       });
    }
  }

}
