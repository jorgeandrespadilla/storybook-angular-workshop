import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html'
})
export class ProductCardComponent {

  /**
   * Indica si se está cargando el producto
   */
  @Input()
  public isLoading: boolean = false;

  /**
   * Producto a mostrar
   */
  @Input()
  public product?: Product;

  /**
   * Evento que se emite cuando se hace click en el botón de ver detalles
   */
  @Output()
  public onClickProduct = new EventEmitter<Product>();

  ngOnInit(): void {
    if (!this.isLoading && !this.product) throw new Error('Product property is required');
  }

  handleClick(): void {
    this.onClickProduct.emit(this.product);
  }

}
