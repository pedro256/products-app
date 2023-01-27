export default class Category{
    id:number;
    name:string;

    constructor(
        _id=0,
        _name=""
    ){
        this.id = _id;
        this.name = _name;
    }
}