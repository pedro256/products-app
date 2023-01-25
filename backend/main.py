from fastapi import FastAPI,APIRouter
from routes.product import ProductRouter
from routes.category import CategoryRouter


app = FastAPI(
    title="API PRODUCTS",
    version="1.0.0"
)
router = APIRouter()

@router.get('/')
def initial():
    return "Life."

app.include_router(prefix="/products",router= ProductRouter)
app.include_router(prefix="/category", router= CategoryRouter)
app.include_router(prefix="/index",router=router)