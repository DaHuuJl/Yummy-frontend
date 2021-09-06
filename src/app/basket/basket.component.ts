import { Component, OnInit } from '@angular/core';
import {Order} from "../shared/interfaces";
import {OrderService} from "../shared/services/order-service";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  orderDetail: Order[] = []

  loading: boolean = false
  massage = "Тут пусто, сначала воспользуйтесь меню"
  amount: number = 0;

  constructor(private orderService:OrderService) {
    this.orderDetail = this.orderService.getProducts()

  }

  ngOnInit(): void {
    for(const item of this.orderDetail){
      if(item.choice == 1) {
        this.amount += item.product.price_1 * item.quantity
      } else
        this.amount += item.product.price_2 * item.quantity
    }
    setTimeout(() => {
      this.loading = true;
    }, 700)
  }

}
