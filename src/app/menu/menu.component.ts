import { Component, OnInit } from '@angular/core';
import {ProductService} from "../shared/services/product.service";
import {Product} from "../shared/interfaces";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  pizza: string = "Пицца"
  drinks: string = "Напитки"
  snacks: string = "Закуски"
  sauces: string = "Соусы"
  products : Product[] = []

  constructor(private productService: ProductService) {
    productService.fetch().subscribe(
      products => {
        this.products = products
      },
      error => {
        console.log(error)
      }
    )
  }

  ngOnInit(): void {

  }

}
