import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './views/categories/categories.component';
import { ProductsComponent } from './views/products/products.component';

const routes: Routes = [
  {path:"categories",component:CategoriesComponent},
  {path:"products",component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
