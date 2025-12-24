from sqlalchemy import Column, Integer, String, Text, ForeignKey
from sqlalchemy.orm import relationship
from backend.db.database import Base

class OurProgram(Base):
    __tablename__ = "our_program"

    id = Column(Integer, primary_key=True, index=True)
    slug = Column(String, unique=True, index=True)
    title = Column(String)
    githubLink = Column(String, nullable=True)
    description = Column(Text)
    division = Column(String)
    date = Column(String)
    divisionImage = Column(String)
    image = Column(String)
    subtitle2 = Column(String, nullable=True)
    description2 = Column(Text, nullable=True)
    image2 = Column(String, nullable=True)
    subtitle3 = Column(String, nullable=True)
    description3 = Column(Text, nullable=True)

    hm = relationship("HMStaff", back_populates="program", cascade="all, delete")


class HMStaff(Base):
    __tablename__ = "hm_staff"

    id = Column(Integer, primary_key=True, index=True)
    program_id = Column(Integer, ForeignKey("our_program.id"))
    name = Column(String)
    title = Column(String)
    image = Column(String)

    program = relationship("OurProgram", back_populates="hm")
