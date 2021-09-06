import {Component, Input, OnInit} from '@angular/core';
import {WindowDialogProfileErrorComponent} from "../window-dialog-profile-error/window-dialog-profile-error.component";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {OrderService} from "../shared/services/order-service";

@Component({
  selector: 'app-basket-check',
  templateUrl: './basket-check.component.html',
  styleUrls: ['./basket-check.component.css']
})
export class BasketCheckComponent implements OnInit {
  @Input() amount!: number

  constructor(public dialog: MatDialog,
              private orderService: OrderService,
              private router: Router,) { }

  ngOnInit(): void {

  }

  createOrder() {
    this.openDialog("Ваш заказ отправлен оператору. Ожидайте звонка")
    this.orderService.clear()
  }

  openDialog(error: string) {
    this.dialog.open(WindowDialogProfileErrorComponent, {
      data : {
        error : error
      }
    })

  }
}
