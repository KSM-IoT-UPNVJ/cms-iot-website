from sqlalchemy import Column, Integer, String, Text
from db.database import Base

class Insight(Base):
    __tablename__ = "insight"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(200))
    summary = Column(Text)
    content = Column(Text)
    thumbnail = Column(String(255))