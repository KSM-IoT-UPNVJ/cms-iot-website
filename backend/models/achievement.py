from sqlalchemy import Column, Integer, String, Text
from db.database import Base

class Achievement(Base):
    __tablename__ = "achievement"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(200))
    description = Column(Text)
    image_url = Column(String(255))