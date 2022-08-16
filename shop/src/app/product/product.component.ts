import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  title = "Ürün Listesi";
  products: any[] = [
    { id: 1, name: "Laptop", price: 10000, categoryId: 1, description: "HP Probook" },
    { id: 2, name: "Mouse", price: 300, categoryId: 2, description: "Logitech Mouse " }
  ]
  
  switches: number = 1;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class. 
  }

  trackByFn(index: number, product: any): number {
    return product.name;
  }

}
