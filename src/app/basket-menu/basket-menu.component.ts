import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Order, Product} from "../shared/interfaces";
import {OrderService} from "../shared/services/order-service";

@Component({
  selector: 'app-basket-menu',
  templateUrl: './basket-menu.component.html',
  styleUrls: ['./basket-menu.component.css']
})
export class BasketMenuComponent implements OnInit {

  @Input() order!: Order;
  size!: string

  constructor(private orderService:OrderService) {

  }


  minus() {
    if(this.order.quantity > 1) {
      this.orderService.quantityMinus(this.order)

    } else
      this.delete()
  }

  plus() {
    this.orderService.quantityPlus(this.order)
    location.reload();
    console.log("plus")
  }

  delete() {
    this.orderService.deleteProduct(this.order)
    location.reload();
  }

  ngOnInit(): void {
    if(this.order.product.productType == "PIZZA") {
      if(this.order.choice == 1) {
        this.size = "1 кг (33см)"
      } else
        this.size = "1,5 кг (41см)"
    } else {
      if(this.order.choice == 1) {
        this.size = "1 л"
      } else
        this.size = "2 л"
    }
  }
}
