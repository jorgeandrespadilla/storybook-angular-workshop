import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Product } from '../../interfaces/product';
import { ProductsService } from '../../services/products.service';

@Component({
  templateUrl: './product-details-page.component.html'
})
export class ProductDetailsPageComponent {

  public isBusy: boolean = false;
  public product?: Product;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.isBusy = true;
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.productsService.getProductById( Number(id) ) )
      )
      .subscribe( product => {
        this.isBusy = false;
        if ( !product ) {
          return this.router.navigateByUrl('');
        }
        return this.product = product;
      });
  }

  goBack() {
    this.router.navigateByUrl('../');
  }

}
