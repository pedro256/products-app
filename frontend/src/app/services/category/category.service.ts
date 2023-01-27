import { Injectable } from '@angular/core';
import { Observable, Subscribable } from 'rxjs';
import Category from 'src/app/shared/models/category.model';
import { ApiService } from '../api/api.service';


@Injectable()
export class CategoryService {
    constructor(
        private api: ApiService
    ) { }

    create(ctg:Category):Observable<any>{
        return this.api.post('category',ctg);
    }
    updateCategory(ctg:Category):Observable<any>{
        return this.api.put('category/'+ctg.id,ctg);
    }
    list(query):Observable<any>{
        return this.api.get("category",query);
    }
    getOne(id):Observable<any>{
        return this.api.get("category",id);
    }

    delete(id):Observable<any>{
        return this.api.delete("category",id);
    }

}