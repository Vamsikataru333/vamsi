import { EmployeeComponent } from './employee/employee.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { AppRoutingModule } from './app-routing.module';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { GameComponent } from './game/game.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    StudentComponent,
    DataBindingComponent,
    InputFormatDirective,
    ContactFormComponent,
    UserFormComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    AddStudentComponent,
    GameComponent
   
  ],
  imports: [
    BrowserModule,FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
