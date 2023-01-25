from pydantic import BaseModel
class CategoryCreateInput(BaseModel):
    name:str
class CategoryViewModel(BaseModel):
    id:int
    name:str