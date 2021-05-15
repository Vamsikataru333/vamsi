import { Component } from '@angular/core';

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css']
})

export class EmployeesComponent{
    employee = {name: 'Sai Vamsi Krishna', age: 21, address: 'Badvel'}
        
}