import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {

  @Input()
  public products: Product[] = [];

  @Output()
  public onViewDetails = new EventEmitter<Product>();

  handleClickProduct(product: Product): void {
    this.onViewDetails.emit(product);
  }
}
