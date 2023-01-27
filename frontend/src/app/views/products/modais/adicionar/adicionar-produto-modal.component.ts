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
        
    add(){

        this.prdServ.create(this.product).subscribe(
            (value)=>{
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