import { Injectable } from '@angular/core';
import { Observable, Subscribable } from 'rxjs';
import Product from 'src/app/shared/models/product.model';
import { ApiService } from '../api/api.service';


@Injectable()
export class ProductService {
    constructor(
        private api: ApiService
    ) { }

    create(ctg:Product):Observable<any>{
        return this.api.post('products',ctg);
    }
    updateProduct(ctg:Product):Observable<any>{
        return this.api.put('products/'+ctg.id,ctg);
    }
    list(query):Observable<any>{
        console.log(query)
        return this.api.get("products",query);
    }
    getOne(id):Observable<any>{
        return this.api.get("products",id);
    }

    delete(id):Observable<any>{
        return this.api.delete("products",id);
    }

}