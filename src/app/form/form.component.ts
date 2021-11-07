import { Router } from '@angular/router';
import { Employee } from './../entities/Employee';
import { EmployeeService } from './../service/employee.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public emp: Employee = {
    name: "",
    profilePic: "",
    gender: "",
    departments: [],
    salary: 0,
    startDate: "",
    note: ""
  }

  departmentList=[
    {id:1,value:"HR",isSelected:false},
    {id:2,value:"Sales",isSelected:false},
    {id:3,value:"Finance",isSelected:false},
    {id:4,value:"Engineer",isSelected:false},
    {id:5,value:"Others",isSelected:false},
]

  constructor(public employeeService: EmployeeService, public route:Router) { }

  ngOnInit(): void {
  }

  onSubmit(f: any) {
    // this.employeeService.postData(f).subscribe( data=> console.log("added!", data));
    console.log(f.value);
    this.emp.name=f.value.name;
    this.emp.gender=f.value.gender;
    this.emp.profilePic=f.value.profilePic;
    this.emp.note=f.value.note;
    this.emp.startDate= ("0"+f.value.day).slice(-2).toString()+" "+("0"+f.value.month).slice(-2).toString()+" "+(f.value.year).toString();
    this.emp.salary=Number(f.value.salary)
    for(let e of this.departmentList){
      if(e.isSelected){
        this.emp.departments.push(e.value);
      }
    }
    console.log(JSON.stringify(this.emp));
    this.employeeService.postData(this.emp).subscribe( data=> console.log("added!", data));
    this.route.navigate(["/"])
  }

  depChange(n:number){
    this.departmentList=this.departmentList.map(d=>{
      if(d.id==n){
        d.isSelected=!d.isSelected;
      }
      return d;
    })

    console.log(this.departmentList)
  }

  show:boolean=true;

  onChange(n:any){
    if(n.length<3){
      this.show=false;
      console.log(n)
      console.log(this.show)
      return
    }
    console.log(n)
    this.show=true;
    console.log(this.show)
  }

}
