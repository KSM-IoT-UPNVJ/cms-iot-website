from pydantic import BaseModel

class InsightBase(BaseModel):
    category: str
    image: str
    vol: int
    title: str
    link: str

class InsightCreate(InsightBase):
    pass

class InsightUpdate(InsightBase):
    pass

class InsightResponse(InsightBase):
    id: int

    class Config:
        orm_mode = True
