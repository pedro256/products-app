from fastapi import FastAPI,APIRouter
from fastapi.middleware.cors import CORSMiddleware
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

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)

app.include_router(prefix="/products",router= ProductRouter)
app.include_router(prefix="/category", router= CategoryRouter)
app.include_router(prefix="/index",router=router)