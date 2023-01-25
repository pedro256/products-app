from fastapi import APIRouter, status,HTTPException
from database.models import Category
from database.connection import SessionLocal
from schemas.category import CategoryCreateInput,CategoryViewModel
from sqlalchemy.orm import lazyload

CategoryRouter = APIRouter()
db=SessionLocal()

@CategoryRouter.get("/")
def getAllCategories():
    items = db.query(Category).options(lazyload(Category.products)).all()
    return items

@CategoryRouter.get("/{id}")
def getOneCategory(id:int):
    item = db.query(Category).options(lazyload(Category.products)).get(id)

    if not item:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Category  not found"
        )

    return item


@CategoryRouter.post("/",response_model=CategoryViewModel, status_code=status.HTTP_201_CREATED)
def createCategory(item:CategoryCreateInput):
    new_categ = Category()
    new_categ.name = item.name

    db.add(new_categ)
    db.commit()


    return CategoryViewModel(
        id= new_categ.id,
        name = new_categ.name
    )
    
@CategoryRouter.put("/{id}",status_code=status.HTTP_204_NO_CONTENT)
def updateOneCategory(id:int,item:CategoryCreateInput):

    entity = db.query(Category).get(id)

    if not entity:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Category  not found"
        )
    
    
    if item.name:
        entity.name = item.name

    db.commit()

    return entity

@CategoryRouter.delete("/{id}",status_code=status.HTTP_204_NO_CONTENT)
def deleteOneCategory(id:int):
    entity = db.query(Category).get(id)

    if not entity:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Category  not found"
        )
    
    db.delete(entity)
    db.commit()


    return 1
