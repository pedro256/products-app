import sqlalchemy
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import declarative_base

URL = 'mariadb+pymysql://productsdbuser:1234@localhost:3306/productsdb'


Base = declarative_base()
engine = sqlalchemy.create_engine(URL,echo=True)
SessionLocal = sessionmaker(bind=engine)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()