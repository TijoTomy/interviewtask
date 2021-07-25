import { Component, OnInit } from '@angular/core';
import {DataServiceService} from "../service/data-service.service"
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public headerNav:Array<any>=[];
  constructor(private dataservice:DataServiceService) { }

  ngOnInit(): void {
    this.dataservice.getHeaderData().subscribe(data=>{
      this.headerNav=data;
      console.log(data)
    })
  }

}
