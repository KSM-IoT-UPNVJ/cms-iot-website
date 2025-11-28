# backend/models/projects.py
from sqlalchemy import Column, Integer, String, Text
from db.session import Base

class Project(Base):
    __tablename__ = "projects"

    id = Column(Integer, primary_key=True, index=True)
    slug = Column(String(255), unique=True, index=True, nullable=False)
    title = Column(String(255), nullable=False)
    description = Column(Text, nullable=True)
    image = Column(String(500), nullable=True)
    division = Column(String(255), nullable=True)
    date = Column(String(255), nullable=True)
    division_image = Column(String(500), nullable=True)
    # hm (head members) stored as JSON string (you can later migrate to JSON type)
    hm = Column(Text, nullable=True)