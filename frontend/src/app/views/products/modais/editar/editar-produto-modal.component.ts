import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductService } from 'src/app/services/product/product.service';
import Category from 'src/app/shared/models/category.model';
import Product from 'src/app/shared/models/product.model';

@Component({
    selector: 'app-modal-editar-produto-component',
    templateUrl: './editar-produto-modal.component.html',
})
export class ModalEditarProduto implements OnInit {

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
            let selected = value.filter(x=>x.id == this.product.category)[0];
            console.log("f",selected)
            value = value.filter(x=>x.id != this.product.category);
            let OrganizedList = [selected,...value]
            console.log("o",OrganizedList)
            this.categoryList = OrganizedList;
          },
          (e)=>{
            alert("Algo deu errado ao buscar Categorias")
            console.error("erro: ",e)
          }
          )
      }
        
    add(){

        this.prdServ.updateProduct(this.product).subscribe(
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