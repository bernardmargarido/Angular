import { EventEmitter, Injectable } from '@angular/core';
import { Product } from './models/product.model';
import { DepartmentService } from './department.service';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private dataFromServer: any[] = [
    {id: 1, name: "Notebook", department_id: 4, price: 399.9, description: 'Notebook Dell'},
    {id: 2, name: "Shirt", department_id: 1, price: 19.9, description: 'Shirt description'},
    {id: 3, name: "Polo", department_id: 1, price: 39.9, description: 'Polo description'},
    {id: 4, name: "Mouse", department_id: 3, price: 59.89, description: 'Mouse description'},
  ]

  private products: Product[] = [];
  private nextID!: number; 

  onNewProduct: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(private departmentService: DepartmentService){
    for(let p of this.dataFromServer){
      this.products.push({
        id: p.id, 
        name: p.name,
        description: p.description,
        price: p.price,
        department: this.departmentService.getDepartmentById(p.id)!
      })
      this.nextID = p.id + 1;
    }
   }

  getProduct(): Product[]{
    return this.products;
  }

  addProduct(p: Product){
    let prod: Product = {...p, id: this.nextID++}

    this.products.push(prod)
    this.onNewProduct.emit(prod)
    console.log(this.products)
  }

}
