import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalAdicionarProduto } from './modais/adicionar/adicionar-produto-modal.component';
import { ModalEditarProduto } from './modais/editar/editar-produto-modal.component';
import { ModalRemoverProduto } from './modais/excluir/rem-prod-modal.component';

import { ProductsComponent } from './products.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ModalAdicionarProduto,
    ModalRemoverProduto,
    ModalEditarProduto
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
  ],
})
export class ProductsModule { }
