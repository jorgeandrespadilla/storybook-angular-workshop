import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductCatalogPageComponent } from "./pages/product-catalog-page/product-catalog-page.component";
import { ProductDetailsPageComponent } from "./pages/product-details-page/product-details-page.component";

const routes: Routes = [
  {
    path: "",
    component: ProductCatalogPageComponent
  },
  {
    path: ":id",
    component: ProductDetailsPageComponent
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductsRoutingModule { }
