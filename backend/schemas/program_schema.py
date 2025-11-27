from pydantic import BaseModel
from typing import List, Optional, Dict

class ProgramPublic(BaseModel):
    id: int
    slug: str
    title: str
    frontText: Optional[str]
    fotoHeader: Optional[str]
    fotoKolase: Optional[str]
    headerAuthor: Optional[str]
    footerAuthor: Optional[str]

    deskripsi1: Optional[str]
    deskripsi2: Optional[str]
    deskripsi3: Optional[str]
    testimoni: Optional[str]

    fotoSlider: List[str] = []
    author: Dict = {}

    class Config:
        orm_mode = True