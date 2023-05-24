import { Injectable } from "@angular/core";
import { Product } from "../interfaces/product";
import { Observable, delay, of } from "rxjs";
import productsData from '../../../assets/data/products.json';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _products: Product[] = productsData.products;

  searchProductsByName(query: string): Observable<Product[]> {
    const filteredProducts = this._products
      .filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
    return of(filteredProducts || []).pipe(
      delay(1000)
    );
  }

  getProductById(id: number): Observable<Product | null> {
    const product = this._products
      .find(product => product.id === id);
    return of(product || null).pipe(
      delay(500)
    );
  }

}
