import { DepartmentService } from './department.service';
import { Product } from './models/product.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private dataServer: any[]= [
    {id: 1, name: 'celular', department_id: 4, price: 40, description: 'laptop bla'},
    {id: 2, name: 'shirt', department_id: 2, price: 10, description: 'shirt bla'},
    {id: 3, name: 'polo', department_id: 6, price: 50, description: 'polo bla'},
    {id: 4, name: 'mouse', department_id: 8, price: 60, description: 'mouse bla'},
  ];

  private nextID: number;

  private products: Product[] = [];

  constructor(private departmentService: DepartmentService) {
    for(let p of this.dataServer) {
      this.products.push({
        id: p.id,
        name: p.name,
        description: p.description,
        price: p.price,
        department: this.departmentService.getDepartmentById(p.id)
      });
      this.nextID = p.id+1;
    }
   }

  getProduct(): Product[] {
    return this.products;
  }

  addProduct(p: Product) {
    this.products.push({...p, id: this.nextID++});
    console.log(this.products);
  }
}
