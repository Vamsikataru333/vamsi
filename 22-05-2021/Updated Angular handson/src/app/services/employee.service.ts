import { EMPLOYEES } from './../employee-mock';

import { Employee } from './../model/employee';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

baseUrl="http://localhost:3000/employees";
//baseUrl="http://localhost:8080/list";

  constructor(private httpClient:HttpClient) { }
  getAllEmployees():Observable<Employee[]>{
    //get data from moc emploee
   // return EMPLOYEES;
   return this.httpClient.get<Employee[]>(this.baseUrl);
   //we can use anone
  // return this.httpClient.get<Employee[]>("http://localhost:3000/employees");
  }

  createEmployee(employee:Employee):Observable<Employee>{
    return this.httpClient.post<Employee>(this.baseUrl,employee);

  }

  getEmployeebyId(id:number):Observable<Employee>{
    return this.httpClient.get<Employee>(this.baseUrl+'/'+id);

  }
  deleteEmployee(id:number):Observable<Employee>{
    return this.httpClient.delete<Employee>(this.baseUrl+'/'+id);
  }
  updateEmployee(employee:Employee):Observable<Employee>{
    return this.httpClient.put<Employee>
    (this.baseUrl+'/'+employee.id,employee);
  }
}
