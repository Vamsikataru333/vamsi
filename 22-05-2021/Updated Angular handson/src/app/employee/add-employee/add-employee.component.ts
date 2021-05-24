import { EmployeeService } from './../../services/employee.service';
import { Employee } from './../../model/employee';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.styl']
})
export class AddEmployeeComponent implements OnInit {
  @Input() countFromParent:number;
  employee:Employee;
  @Output() countFromChild=new EventEmitter<number>();
  signupForm:FormGroup;

  constructor(private employeeService:EmployeeService,private router:Router) { }

  ngOnInit(): void {
    this.signupForm=new FormGroup({
      id: new FormControl(this.countFromParent,Validators.required),
      name:new FormControl(null,Validators.required),
      address:new FormControl(null,Validators.required),
      location:new FormControl(null,Validators.required)
    });
  }

  // addEmployee():void{
    
  // }
  onSubmit():void{
    //this.countFromChild.emit(this.countFromParent+5);
    this.employeeService.createEmployee(this.signupForm.value).subscribe(data=>{
      console.log("Employee Add successfully");
      this.router.navigate(['']);

    });
    console.log(this.signupForm);

  }

}
