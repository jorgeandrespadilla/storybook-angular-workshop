import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html'
})
export class ProductCardComponent {

  @Input()
  public isLoading: boolean = false;

  @Input()
  public product?: Product;

  @Output()
  public onClickProduct = new EventEmitter<Product>();

  ngOnInit(): void {
    if (!this.isLoading && !this.product) throw new Error('Product property is required');
  }

  handleClick(): void {
    this.onClickProduct.emit(this.product);
  }

}
