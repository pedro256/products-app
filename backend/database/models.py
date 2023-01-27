from sqlalchemy import Column, Integer, String, Float,ForeignKey,CheckConstraint
from sqlalchemy.orm import declarative_base,relationship
from .connection import Base

class Product(Base):
    __tablename__ = "product"
    id = Column(Integer,primary_key=True,autoincrement=True)
    name = Column(String(60))
    category = Column(Integer,ForeignKey("category.id"))
    price = Column(Float)
    serie = Column(Integer,CheckConstraint('serie > 0'))
    categoryItem = relationship("Category",back_populates="products")

class Category(Base):
    __tablename__ = "category"
    id = Column(Integer,primary_key=True,autoincrement=True)
    name = Column(String(128),nullable=False)
    products = relationship("Product",back_populates="categoryItem",cascade="all, delete-orphan")