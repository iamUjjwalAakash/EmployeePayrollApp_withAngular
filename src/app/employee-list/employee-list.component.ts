import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from './../entities/Employee';
import { EmployeeService } from './../service/employee.service';
import { Component, OnInit } from '@angular/core';
import { IdEmployee } from '../entities/IdEmployee';

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }
// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})


export class EmployeeListComponent implements OnInit {

  // displayedColumns: string[] = ['profilePic', 'name', 'gender','departments', 'salary',  'startDate'];
  dataSource:IdEmployee[] = [];
  num:number=0;
  constructor(public employeeService: EmployeeService, public route:Router) { 
    
  }

  ngOnInit(): void {
    //this.dataSource=this.employeeService.getData();
    this.getAllEmployeeDetails();
    setTimeout(() => {
      if(this.num<1){
        this.ngOnInit()
        this.num+=1;
      }
    }, 2000);
  }


  getAllEmployeeDetails(){
    this.employeeService.getFromDataBase().subscribe(info=>{ this.dataSource = info.data; console.log((this.dataSource));}, error=>console.log(error));
    
  }

  delete(n:number){
    this.employeeService.deleteData(n).subscribe(info=>{console.log(info);this.ngOnInit();});
    
  }

  

}
