from fastapi import APIRouter, status,HTTPException,Depends
from database.connection import get_db
from database.models import Category
from schemas.category import CategoryCreateInput,CategoryViewModel
from sqlalchemy.orm import selectinload,Session

CategoryRouter = APIRouter()


@CategoryRouter.get("/")
def getAllCategories(db: Session = Depends(get_db),name:str=""):
    query = db.query(Category)
    all_filters = []
    if name:
        all_filters.append(Category.name.like('%'+name+'%'))
    
    items = query.filter(*all_filters).all()

    return items

@CategoryRouter.get("/{id}")
def getOneCategory(id:int,db: Session = Depends(get_db)):
    item = db.query(Category).options(selectinload(Category.products)).get(id)

    if not item:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Category  not found"
        )
    return item


@CategoryRouter.post("/",response_model=CategoryViewModel, status_code=status.HTTP_201_CREATED)
def createCategory(item:CategoryCreateInput,db: Session = Depends(get_db)):
    new_categ = Category()
    new_categ.name = item.name

    db.add(new_categ)
    db.commit()


    return CategoryViewModel(
        id= new_categ.id,
        name = new_categ.name
    )
    
@CategoryRouter.put("/{id}",status_code=status.HTTP_204_NO_CONTENT)
def updateOneCategory(id:int,item:CategoryCreateInput,db: Session = Depends(get_db)):

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
def deleteOneCategory(id:int,db: Session = Depends(get_db)):
    entity = db.query(Category).get(id)

    if not entity:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Category  not found"
        )
    
    db.delete(entity)
    db.commit()


    return 1
