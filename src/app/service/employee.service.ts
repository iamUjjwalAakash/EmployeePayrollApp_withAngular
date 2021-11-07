import { getTestBed } from '@angular/core/testing';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../entities/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl = environment.getURL;
  // getData(){
  //   return [{"id":1,"name":"Urika","salary":43434,"gender":"M","startDate":"2021-10-12","note":"new mwmber","profilePic":"pic1","departments":["sales"]},{"id":2,"name":"Yuka","salary":55434,"gender":"F","startDate":"2021-10-11","note":"new member","profilePic":"pic2","departments":["sales"]}];
  // }
  // private employeeData:Employee[]=[{"id":1,"name":"Urika","salary":43434,"gender":"M","startDate":"2021-10-12","note":"new mwmber","profilePic":"pic1","departments":["sales"]},{"id":2,"name":"Yuka","salary":55434,"gender":"F","startDate":"2021-10-11","note":"new member","profilePic":"pic2","departments":["sales"]}];

  constructor(public http:HttpClient) { }

  getFromDataBase():Observable<any>{
    return this.http.get<any>(this.baseUrl);
  }

  postData(emp: Employee){
    return this.http.post<any>(this.baseUrl+"add", emp);

  }

  deleteData(n:number){
    return this.http.delete<any>(this.baseUrl+"/delete/"+n);
    
  }
}
