import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CategoriesComponent } from './categories.component';
import { FormsModule } from '@angular/forms';
import { ModalAdicionarCategoria } from './modais/adicionar/adicionar-categoria-modal.component';
import { ModalRemoverCategoria } from './modais/excluir/rem-categoria-modal.component';
import { ModalEditarCategoria } from './modais/editar/editar-categoria-modal.component';

@NgModule({
  declarations: [
    CategoriesComponent,
    ModalAdicionarCategoria,
    ModalRemoverCategoria,
    ModalEditarCategoria
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
  ],
})
export class CategoriesModule { }
