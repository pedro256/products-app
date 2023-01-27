import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductService } from 'src/app/services/product/product.service';
import Category from 'src/app/shared/models/category.model';
import Product from 'src/app/shared/models/product.model';

@Component({
    selector: 'app-modal-remover-categoria-component',
    templateUrl: './rem-categoria-modal.component.html',
})
export class ModalRemoverCategoria implements OnInit {

    categoria: Category = new Category();
    produtosRelacionados = new Array<Product>();
    parent:any;

    constructor(
        public activeModal: NgbActiveModal,
        public ctgServ: CategoryService,
        public prdServ: ProductService
    ) {
    }

    ngOnInit(): void {
        this.buscarProdutos()
    }
    buscarProdutos(){

        this.prdServ.list({categoryId:this.categoria.id}).subscribe(
          (value)=>{
            
            this.produtosRelacionados = value;
          },
          (e)=>{
            alert("Algo deu errado ao buscar Categorias")
            console.error("erro: ",e)
          }
          )
      }

    remove(){

        this.ctgServ.delete(this.categoria.id).subscribe(
            (value)=>{
                this.parent.limparParams();
                alert("Operaçãp realizada !")
                this.activeModal.close('Close click');
            },
            (e)=>{
                alert("Algo deu errado !"),
                console.log("error",e)
            }
        )
    }

}