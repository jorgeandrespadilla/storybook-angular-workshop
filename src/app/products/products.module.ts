import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCatalogPageComponent } from './pages/product-catalog-page/product-catalog-page.component';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProductCatalogPageComponent,
    ProductDetailsPageComponent,
    ProductCardComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
