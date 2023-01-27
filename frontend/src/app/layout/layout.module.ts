import { CommonModule } from "@angular/common";
import { LOCALE_ID, NgModule } from "@angular/core";
import { AppRoutingModule } from "../app-routing.module";
import { LayoutComponent } from "./layout.component";
import {CategoriesModule} from '../views/categories/categories.module'
import { ProductsModule } from "../views/products/products.module";
@NgModule({
    imports:[
        AppRoutingModule,
        CommonModule,
        CategoriesModule,
        ProductsModule
    ],
    declarations:[
        LayoutComponent,
    ],
    exports:[
        LayoutComponent,
        CommonModule
    ]
})
export class LayoutModule{}