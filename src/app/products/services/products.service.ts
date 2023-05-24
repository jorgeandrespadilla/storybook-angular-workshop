import { Injectable } from "@angular/core";
import { Product } from "../interfaces/product";
import { Observable, of } from "rxjs";
import * as productsData from '../../../assets/data/products.json';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  getProducts(): Observable<Product[]> {
    return of(productsData);
  }

  searchProductById(id: number): Observable<Product | null> {
    const products = productsData as Product[];
    const product = products.find( (product: Product) => product.id === id );
    return of(product || null);
  }

}
