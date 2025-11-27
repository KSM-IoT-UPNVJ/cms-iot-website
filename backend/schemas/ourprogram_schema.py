from pydantic import BaseModel

class OurProgramPublic(BaseModel):
    id: int
    title: str
    description: str
    image_url: str

    class Config:
        orm_mode = True