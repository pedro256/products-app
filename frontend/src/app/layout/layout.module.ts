import { CommonModule } from "@angular/common";
import { LOCALE_ID, NgModule } from "@angular/core";
import { AppRoutingModule } from "../app-routing.module";
import { LayoutComponent } from "./layout.component";

@NgModule({
    imports:[
        AppRoutingModule,
        CommonModule
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