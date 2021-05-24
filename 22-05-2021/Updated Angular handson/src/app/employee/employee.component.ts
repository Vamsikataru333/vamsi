import { EmployeeService } from './../services/employee.service';
import { Employee } from './../model/employee';
import { EMPLOYEES } from './../employee-mock';
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector:'app-employee',
    templateUrl:'./employee.component.html',
    styleUrls:['./employee.component.css']
})
export class EmployeeComponent implements OnInit{
    employees1:Employee[];
   //  employees1;
   
   
   constructor(private employeeService:EmployeeService,private router:Router){}
      ngOnInit():void{
          this.employeeService.getAllEmployees().subscribe(data=>{
              this.employees1=data;
          });
      }

  // employees1=EMPLOYEES;
  updateEmployee(employee:Employee):void{
      localStorage.removeItem('id');
     localStorage.setItem('id',employee.id.toString());
     this.router.navigate(['update-employee']);

  }
  deleteEmployee(employee:Employee):void
{
this.employeeService.deleteEmployee(employee.id).subscribe();
this.employees1=this.employees1.filter(e=>e!==employee);
}
    

}

