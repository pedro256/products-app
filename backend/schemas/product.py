from pydantic import BaseModel
from typing import Any, Dict, Optional, Tuple
from .category import CategoryViewModel

class ProductCreateInput(BaseModel):
    name:str
    category:int
    price:float
    serie:int

class ProductUpdateInput(BaseModel):
    name: Optional[str] = None
    category: Optional[int] = None
    price: Optional[float] = None
    serie: Optional[int] = None

class ProductViewModel(BaseModel):
    id:int
    name:str
    category:int
    #category:CategoryViewModel
    price:float
    serie:int



        
