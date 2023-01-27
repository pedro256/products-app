from fastapi import APIRouter, status,HTTPException,Depends
from database.connection import get_db
from database.models import Product
from schemas.product import ProductCreateInput,ProductViewModel,ProductUpdateInput
from sqlalchemy.orm import joinedload,Session

ProductRouter = APIRouter()


@ProductRouter.get("/")
def getAllProducts( name: str = '',serie:int = 0,min_price:float=-1,max_price:float=0,categoryId:int =0,db: Session = Depends(get_db)):
    query = db.query(Product).options(
        joinedload(Product.categoryItem,innerjoin=True)
        )
    all_filters = []
    if name:
        all_filters.append(Product.name.like('%'+name+'%'))
    if serie:
        all_filters.append(Product.serie == serie)
    if min_price>=0:
        all_filters.append(Product.price>=min_price)
    if max_price>0:
        all_filters.append(Product.price<=max_price)
    if categoryId:
        all_filters.append(Product.category == categoryId)

    items = query.filter(*all_filters).all()
    return items

@ProductRouter.post("/",response_model=ProductViewModel, status_code=status.HTTP_201_CREATED)
def createProduct(item:ProductCreateInput,db: Session = Depends(get_db)):
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
def getOneProduct(id:int,db: Session = Depends(get_db)):
    item = db.query(Product).options(joinedload(Product.categoryItem,innerjoin=True)).get(id)

    if not item:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Product  not found"
        )
    
    

    return item



@ProductRouter.put("/{id}",status_code=status.HTTP_204_NO_CONTENT)
def updateOneProduct(id:int,item:ProductUpdateInput,db: Session = Depends(get_db)):

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
def deleteOneCategory(id:int,db: Session = Depends(get_db)):
    entity = db.query(Product).get(id)

    if not entity:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Product  not found"
        )
    
    db.delete(entity)
    db.commit()


    return 1

