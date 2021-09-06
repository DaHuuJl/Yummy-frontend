import {Injectable} from "@angular/core";
import {Order, Product} from "../interfaces";

@Injectable({
  providedIn: "root"
})
export class OrderService {

  array: Order[] = []
  newArray: Order[] = []

  constructor() {}

  addNewProduct(order: Order) {
    this.fromStorage()
    let check: number = 0
    if(this.array.length != 0){
      for(const item of this.array){
        if(item.product.name == order.product.name && item.choice == order.choice) {
          let a = item.quantity + 1
          item.quantity = a
          this.newArray.push(item)
          console.log("add quantity")
          check++
        } else {
          console.log("add old item")
          this.newArray.push(item)
        }
      }
      if(check == 0) {
        console.log("add new item")
        this.newArray.push(order)
      }
    } else
      this.newArray.push(order)
    this.array = this.newArray
    this.newArray = []
    this.printArray()
    this.toStorage()
    //this.clearStorage()
  }

  deleteProduct(order : Order) {
    this.fromStorage()
    for(const item of this.array){
      if(item.product.id == order.product.id && item.choice == order.choice) {

      } else {
        this.newArray.push(item)
      }
    }
    this.array = this.newArray
    this.newArray = []
    this.toStorage()
    location.reload();
  }

  quantityMinus(order : Order) {

    this.fromStorage()
    for(const item of this.array){
      if(item.product.id == order.product.id && item.choice == order.choice) {
        item.quantity--
        this.newArray.push(item)
      } else {
        this.newArray.push(item)
      }
    }
    this.array = this.newArray
    this.newArray = []
    this.toStorage()
    location.reload();
  }

  quantityPlus(order : Order) {
    this.fromStorage()
    for(const item of this.array){
      if(item.product.id == order.product.id && item.choice == order.choice) {
        item.quantity++
        this.newArray.push(item)
      } else {
        this.newArray.push(item)
      }
    }
    this.array = this.newArray
    this.newArray = []
    this.toStorage()
    location.reload();
  }

  fromStorage() {
    if(localStorage.getItem("basket") != "" && localStorage.getItem("basket") != null) {
      this.array = JSON.parse(<string>localStorage.getItem("basket"))
    } else
      this.array = []
  }

  toStorage() {
    localStorage.setItem("basket", JSON.stringify(this.array))
  }

  clear() {
    this.array = []
    this.toStorage()
  }

  clearStorage() {
    localStorage.setItem("basket", "")
  }

  getProducts() {
    this.fromStorage()
    return this.array;
  }

  printArray() {
    console.clear();
    for(const item of this.array){
      console.log(item.product)
      console.log(item.choice)
      console.log(item.quantity)
    }
  }
}
