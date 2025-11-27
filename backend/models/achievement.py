from sqlalchemy import Column, Integer, String, Text, JSON, DateTime
from sqlalchemy.sql import func
from db.database import Base

class Achievement(Base):
    __tablename__ = "achievements"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    award = Column(String(255), nullable=True)
    description = Column(Text, nullable=True)
    image = Column(String(255), nullable=True)
    images = Column(JSON, default=[])
    time = Column(String(50), nullable=True)
    organizer = Column(String(255), nullable=True)
    contributors = Column(JSON, default=[])
    created_at = Column(DateTime(timezone=True), server_default=func.now())