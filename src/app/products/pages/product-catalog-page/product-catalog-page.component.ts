import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product';
import { Router } from '@angular/router';

@Component({
  templateUrl: './product-catalog-page.component.html'
})
export class ProductCatalogPageComponent {

  public products: Product[] = [];
  public isBusy: boolean = false;

  constructor(
    private router: Router,
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.searchByName('');
  }

  searchByName(query: string): void {
    this.isBusy = true;
    this.productService
      .searchProductsByName(query)
      .subscribe(products => {
        this.products = products;
        this.isBusy = false;
      });
  }

  handleViewDetails(product: Product): void {
    this.router.navigateByUrl(`/products/${product.id}`);
  }

}
