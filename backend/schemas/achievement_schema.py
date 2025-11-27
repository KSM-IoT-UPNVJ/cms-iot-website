from pydantic import BaseModel

class AchievementPublic(BaseModel):
    id: int
    title: str
    description: str
    image_url: str

    class Config:
        orm_mode = True