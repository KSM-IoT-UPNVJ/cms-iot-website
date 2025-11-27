from pydantic import BaseModel

class InsightBase(BaseModel):
    name: str
    image: str
    description: str | None = None
    gradient: str | None = None


class InsightPublic(InsightBase):
    id: int

    class Config:
        orm_mode = True