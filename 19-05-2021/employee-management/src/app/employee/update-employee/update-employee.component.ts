import { Employee } from './../../model/employee';
import { EmployeeService } from './../../services/employee.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.styl']
})
export class UpdateEmployeeComponent implements OnInit {
updateForm:FormGroup;
  constructor(private employeeService:EmployeeService,private router:Router) { }
  ngOnInit(): void {
    this.updateForm=new FormGroup({
      id: new FormControl(null,Validators.required),
      name:new FormControl(null,Validators.required),
      address:new FormControl(null,Validators.required),
      location:new FormControl(null,Validators.required)
    });
    const id =localStorage.getItem('id');
    if(+id >0){
     this.employeeService.getEmployeebyId(+id).subscribe(data=>{
      this.updateForm.patchValue(data);
     });
  };
  }
 onSubmit(): void {
  this.employeeService.updateEmployee(this.updateForm.value).subscribe(data =>{
      console.log(data);
      this.router.navigate(['']);
    },
    error=>{
      alert(error);
     });
}
}
