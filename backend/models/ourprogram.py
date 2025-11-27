from sqlalchemy import Column, Integer, String, Text
from db.database import Base

class OurProgram(Base):
    __tablename__ = "ourprogram"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(150))
    description = Column(Text)
    image_url = Column(String(255))