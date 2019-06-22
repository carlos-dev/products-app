import { Injectable } from '@angular/core';
import { Department } from './models/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private departments: Department[] = [
    {id: 1, name: 'clothing'},
    {id: 2, name: 'books'},
    {id: 3, name: 'electronics'},
    {id: 4, name: 'computers'}
  ];
  private nextID: number = 5

  constructor() { }

  getDepartments(): Department[] {
    return this.departments;
  }

  addDepartment(d: Department) {
    this.departments.push({...d, id: this.nextID++});
  }

  getDepartmentById(id: number): Department {
    return this.departments.find((d) => d.id == id)
  }
}
