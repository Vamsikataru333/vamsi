import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Student } from './model/student';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  baseUrl="http://localhost:8200/students";

  constructor(private httpClient:HttpClient) { }
  getAllStudents():Observable<Student[]>{
return this.httpClient.get<Student[]>(this.baseUrl);
  }

  }

