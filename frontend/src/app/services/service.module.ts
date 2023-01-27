

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiService } from './api/api.service';
import { ConverterService } from './api/converter.service';
import { CategoryService } from './category/category.service';
import { ProductService } from './product/product.service';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    ApiService,
    ConverterService,
    CategoryService,
    ProductService
  ],
})
export class ServiceModule { }
