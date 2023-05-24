import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {

  /**
   * Número de tarjetas de carga a mostrar
   */
  @Input()
  public loadingCardsCount: number = 4;

  /**
   * Indica si se están cargando los productos
   */
  @Input()
  public isLoading: boolean = false;

  /**
   * Lista de productos a mostrar
   */
  @Input()
  public products: Product[] = [];

  @Output()
  public onViewDetails = new EventEmitter<Product>();

  get emptyProducts(): number[] {
    return Array(this.loadingCardsCount).fill(0);
  }

  handleClickProduct(product: Product): void {
    this.onViewDetails.emit(product);
  }
}
