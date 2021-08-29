export enum ProductType {
  PIZZA = "Пицца",
  DRINKS ="Напитки",
  SNACKS = "Закуски"
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
