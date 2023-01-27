import Category from "./category.model"


export default class Product{

    id:number
    name:string
    category:number = 0
    categoryItem?:Category
    price:number
    serie:number

    constructor(
        _id=0,
        _name="",
        _price=0,
        _serie=0,
        

    ){
        this.id = _id;
        this.name = _name;
        this.price = _price;
        this.serie = _serie;
    }

}