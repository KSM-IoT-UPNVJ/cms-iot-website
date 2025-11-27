from pydantic import BaseModel

class InsightPublic(BaseModel):
    id: int
    title: str
    summary: str
    content: str
    thumbnail: str

    class Config:
        orm_mode = True