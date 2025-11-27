from sqlalchemy import Column, Integer, String, Text
from db.database import Base

class Project(Base):
    __tablename__ = "project"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(150))
    description = Column(Text)
    repo_url = Column(String(255))
    thumbnail = Column(String(255))