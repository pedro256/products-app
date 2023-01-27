import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from 'src/app/services/category/category.service';
import Category from 'src/app/shared/models/category.model';

@Component({
    selector: 'app-modal-editar-categoria-component',
    templateUrl: './editar-categoria-modal.component.html',
})
export class ModalEditarCategoria implements OnInit {

    categoria: Category = new Category();

    constructor(
        public activeModal: NgbActiveModal,
        public ctgServ: CategoryService
    ) {
    }

    ngOnInit(): void {
    }

    add(){

        this.ctgServ.updateCategory(this.categoria).subscribe(
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