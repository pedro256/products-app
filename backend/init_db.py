from database.connection import engine,Base
from database.models import Product,Category

print("Creating database ...")

Base.metadata.create_all(engine)