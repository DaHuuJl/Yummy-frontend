import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Order, Product} from "../shared/interfaces";
import {OrderService} from "../shared/services/order-service";
import {FormControl} from "@angular/forms";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CardMenuComponent implements OnInit {

  @Input() product!: Product;
  check: boolean = true
  firstText: string = "1 кг (33см)"
  secondText: string = "1,5 кг (41см)"
  radioGroup = new FormControl();
  durationInSeconds = 5;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private orderService: OrderService, public snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
    if (this.product.productType == 'DRINKS') {
      this.check = false
      this.firstText = "1 л"
      this.secondText = "2 л"
    }

  }

  openSnackBar() {
    this.snackBar.open('Добавлено в корзину 🍕', 'Закрыть', {panelClass: ['blue-snackbar', 'mat-accent']});
  }

  openSnackBar2() {
    this.snackBar.open('Для начала сделайте выбор!', 'Закрыть', {panelClass: ['red-snackbar', 'mat-accent'],
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition});
  }

  bay() {
    if(this.radioGroup.touched) {
      let a: number = 1
      if(this.radioGroup.value == "1")
        a = 1
      else
        a = 2
      let order: Order = {
        product: this.product,
        choice: a,
        quantity: 1
      }
      this.orderService.addNewProduct(order)
      let array: Order[] = this.orderService.getProducts()
      this.openSnackBar()
    } else
      this.openSnackBar2()

  }
}
