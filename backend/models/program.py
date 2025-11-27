from sqlalchemy import Column, Integer, String, JSON, Text
from db.database import Base

class Program(Base):
    __tablename__ = "program"

    id = Column(Integer, primary_key=True, index=True)
    slug = Column(String, unique=True, index=True)

    # data utama
    title = Column(String)
    frontText = Column(Text)
    fotoHeader = Column(String)
    fotoKolase = Column(String)
    headerAuthor = Column(String)
    footerAuthor = Column(String)

    # teks paragraf
    deskripsi1 = Column(Text)
    deskripsi2 = Column(Text)
    deskripsi3 = Column(Text)
    testimoni = Column(Text)

    # array slider
    fotoSlider = Column(JSON, default=[])

    # object author (nama + jabatan)
    author = Column(JSON, default={})