import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from 'src/app/services/category/category.service';
import Category from 'src/app/shared/models/category.model';
import { ModalAdicionarCategoria } from './modais/adicionar/adicionar-categoria-modal.component';
import { ModalEditarCategoria } from './modais/editar/editar-categoria-modal.component';
import { ModalRemoverCategoria } from './modais/excluir/rem-categoria-modal.component';

@Component({
  selector: 'app-categories-component',
  templateUrl: './categories.component.html',
  styleUrls:['./categories.component.scss'],
  providers:[]
})
export class CategoriesComponent implements OnInit{
  
  list = new Array<Category>();
  params:any = {
    name:""
  }

  constructor(
    private modalService: NgbModal,
    private ctgService: CategoryService
  ) {
  }


  limparParams(){
    this.params = {
      name:""
    }
    this.buscarCategorias()
  }

  buscarCategorias(){

    this.ctgService.list(this.params).subscribe(
      (value)=>{
        this.list = value;
      },
      (e)=>{
        alert("Algo deu errado ao buscar Categorias")
        console.error("erro: ",e)
      }
      )
  }
  ngOnInit(): void {
     this.buscarCategorias()
  }
  abrirModalAdicionar(){
    const modalRef = this.modalService.open(ModalAdicionarCategoria);
    modalRef.componentInstance.parent = this;
  }
  abrirModalExcluir(item){
    const modalRef = this.modalService.open(ModalRemoverCategoria);
    modalRef.componentInstance.categoria = item;
    modalRef.componentInstance.parent = this;
  }
  abrirModalEditar(item){
    const it = structuredClone(item);
    const modalRef = this.modalService.open(ModalEditarCategoria);
    modalRef.componentInstance.categoria = it;
    modalRef.componentInstance.parent = this;
  }


}
