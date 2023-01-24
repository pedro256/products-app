from fastapi import FastAPI,APIRouter


app = FastAPI()
router = APIRouter()

@router.get('/')
def initial():
    return "Life."


app.include_router(prefix="/app",router=router)