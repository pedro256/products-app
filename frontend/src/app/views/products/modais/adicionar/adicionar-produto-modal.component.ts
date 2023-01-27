import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductService } from 'src/app/services/product/product.service';
import Category from 'src/app/shared/models/category.model';
import Product from 'src/app/shared/models/product.model';

@Component({
    selector: 'app-modal-adicionar-produto-component',
    templateUrl: './adicionar-produto-modal.component.html',
})
export class ModalAdicionarProduto implements OnInit {

    product: Product = new Product();
    categoryList = new Array<Category>();
    parent:any;

    constructor(
        public activeModal: NgbActiveModal,
        public prdServ: ProductService,
        public ctgServ: CategoryService
    ) {
    }

    ngOnInit(): void {
        this.buscarCategorias()
    }

    buscarCategorias(){

        this.ctgServ.list({}).subscribe(
          (value)=>{
            this.categoryList = value;
          },
          (e)=>{
            alert("Algo deu errado ao buscar Categorias")
            console.error("erro: ",e)
          }
          )
    }
    
    validarDados(){
        if(!this.product.name.length){
            alert("Nome deve ser preenchido")
            return false
        }
        if(this.product.price<=0){
            alert("Preço deve ser preenchido")
            return false
        }
        if(this.product.serie<=0){
            alert("Série deve ser preenchido")
            return false
        }
        if(this.product.category<=0){
            alert("Categoria deve ser selecionada")
            return false
        }
        return true;
    }
        
    add(){
        if(!this.validarDados()){
            return;
        }

        this.prdServ.create(this.product).subscribe(
            (value)=>{
                this.parent.limparParams();
                alert("Dados Salvos !")
                this.activeModal.close('Close click');
            },
            (e)=>{
                alert("Algo deu errado !"),
                console.log("error",e)
            }
        )
    }

}