import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductService } from 'src/app/services/product/product.service';
import Category from 'src/app/shared/models/category.model';
import Product from 'src/app/shared/models/product.model';

@Component({
    selector: 'app-modal-remover-produto-component',
    templateUrl: './rem-prod-modal.component.html',
})
export class ModalRemoverProduto implements OnInit {
    product = new Product();
    parent:any;

    constructor(
        public activeModal: NgbActiveModal,
        public prdServ: ProductService
    ) {
    }

    ngOnInit(): void {
    }
    remove(){

        this.prdServ.delete(this.product.id).subscribe(
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