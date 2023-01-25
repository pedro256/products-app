from fastapi import APIRouter, status,HTTPException
from database.models import Product
from database.connection import SessionLocal
from schemas.product import ProductCreateInput,ProductViewModel,ProductUpdateInput
from sqlalchemy.orm import lazyload

ProductRouter = APIRouter()
db=SessionLocal()

@ProductRouter.get("/")
def getAllProducts():
    items = db.query(Product).options(lazyload(Product.categoryItem)).all()
    return items

@ProductRouter.post("/",response_model=ProductViewModel, status_code=status.HTTP_201_CREATED)
def createProduct(item:ProductCreateInput):
    new_prod = Product()
    new_prod.name = item.name
    new_prod.category = item.category
    new_prod.price = item.price
    new_prod.serie = item.serie

    db.add(new_prod)
    db.commit()


    return ProductViewModel(
        id=new_prod.id,
        category=new_prod.category,
        name=new_prod.name,
        price=new_prod.price,
        serie=new_prod.serie
    )
    

@ProductRouter.get("/{id}")
def getOneProduct(id:int):
    item = db.query(Product).options(lazyload(Product.categoryItem)).get(id)

    if not item:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Product  not found"
        )

    return item



@ProductRouter.put("/{id}",status_code=status.HTTP_204_NO_CONTENT)
def updateOneProduct(id:int,item:ProductUpdateInput):

    entity = db.query(Product).get(id)

    if not entity:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Product  not found"
        )
    
    
    if item.name:
        entity.name = item.name
    
    if item.price:
        entity.price = item.price
    
    if item.serie:
        entity.serie = item.serie


    db.commit()

    return entity

@ProductRouter.delete("/{id}",status_code=status.HTTP_204_NO_CONTENT)
def deleteOneCategory(id:int):
    entity = db.query(Product).get(id)

    if not entity:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Product  not found"
        )
    
    db.delete(entity)
    db.commit()


    return 1

