import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product';
import { Router } from '@angular/router';

@Component({
  templateUrl: './product-catalog-page.component.html'
})
export class ProductCatalogPageComponent {

  public products: Product[] = [];

  constructor(
    private router: Router,
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.searchByName('');
  }

  searchByName(query: string): void {
    this.productService
      .searchProductsByName(query)
      .subscribe(products => {
        this.products = products;
      });
  }

  handleViewDetails(product: Product): void {
    this.router.navigateByUrl(`/products/${product.id}`);
  }

}
