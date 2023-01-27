import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductService } from 'src/app/services/product/product.service';
import Category from 'src/app/shared/models/category.model';
import Product from 'src/app/shared/models/product.model';
import { ModalAdicionarProduto } from './modais/adicionar/adicionar-produto-modal.component';
import { ModalEditarProduto } from './modais/editar/editar-produto-modal.component';
import { ModalRemoverProduto } from './modais/excluir/rem-prod-modal.component';

@Component({
  selector: 'app-products-component',
  templateUrl: './products.component.html',
  styleUrls:['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  
  list = new Array<Product>();
  categoryList = new Array<Category>();
  params:any = {
    name:"",
    categoryId:0,
    min_price:0,
    max_price:0,
    serie:0
  }
  
  constructor(
    private modalService: NgbModal,
    private prdService:ProductService,
    private ctgService:CategoryService,
  ) {
  }

  limparParams(){
    this.params = {
      name:"",
      categoryId:0,
      min_price:0,
      max_price:0,
      serie:0
    }
    this.buscarProdutos()
  }

  buscarProdutos(){

    this.prdService.list(this.params).subscribe(
      (value)=>{
        console.log("products",value)
        this.list = value;
      },
      (e)=>{
        alert("Algo deu errado ao buscar Produtos")
        console.error("erro: ",e)
      }
      )
  }
  buscarCategorias(){

    this.ctgService.list({}).subscribe(
      (value)=>{
        this.categoryList = value;
      },
      (e)=>{
        alert("Algo deu errado ao buscar Categorias")
        console.error("erro: ",e)
      }
      )
  }
  ngOnInit(): void {
     this.buscarProdutos()
     this.buscarCategorias()
  }

  abrirModalAdicionar(){
    const modalRef = this.modalService.open(ModalAdicionarProduto);
    modalRef.componentInstance.parent = this;
  }
  abrirModalRemover(item){
    const modalRef = this.modalService.open(ModalRemoverProduto);
    modalRef.componentInstance.product = item;
    modalRef.componentInstance.parent = this;
  }
  abrirModalEditar(item){
    console.log(item)
    const it = structuredClone(item);
    const modalRef = this.modalService.open(ModalEditarProduto);
    modalRef.componentInstance.product = it;
    modalRef.componentInstance.parent = this;
  }


}
