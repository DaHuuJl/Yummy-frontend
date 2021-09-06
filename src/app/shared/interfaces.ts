export enum ProductType {
  PIZZA = "PIZZA",
  DRINKS ="DRINKS",
  SNACKS = "SNACKS"
}

export interface Product {
  id: number
  name: string
  description: string
  price_1: number
  price_2: number
  productType: ProductType
  image: string
}

export interface UserReg {
  fullName: string
  password: string
  phoneNumber: string
}

export interface UserLog {
  password: string
  phoneNumber: string
}

export interface Token {
  token: string
}

export interface Order {
  product: Product
  choice: number
  quantity: number
}

export interface LoginHistory {
  browser: string
  date: string
}

export interface User {
  fullName: string
  phoneNumber: string
  image: string
}
