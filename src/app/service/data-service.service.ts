import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { of } from 'rxjs'; 
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }
  getHeaderData():Observable<any>{
   
            let data:Array<string>=["Home","About","Careers","Product","IT Security","Contact"]
    return of(data);

  }
}
