import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Product} from "../interfaces";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ProductService {

  constructor(private http:HttpClient) {}

  fetch(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/product/getAll')
  }
}
