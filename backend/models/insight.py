from sqlalchemy import Column, Integer, String, Text
from db.database import Base

class Insight(Base):
    __tablename__ = "insights"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), nullable=False)
    image = Column(String(255), nullable=False)
    description = Column(Text, nullable=True)
    gradient = Column(String(255), nullable=True)