import { StudentComponent } from './student/student.component';

import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { EMPLOYEES } from './employee-mock';
import { EmployeeComponent } from './employee/employee.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';

const routes:Routes=[
  {path:'',component:EmployeeComponent},
  {path:'add-employee',component:AddEmployeeComponent},
  {path:'employee/:id',component:EmployeeComponent},
  {path:'update-employee',component:UpdateEmployeeComponent}
];
// const routes:Routes=[
//   {path:'',component:StudentComponent}
// ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
