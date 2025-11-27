from pydantic import BaseModel
from typing import List

class AchievementBase(BaseModel):
    title: str
    award: str | None = None
    description: str | None = None
    image: str | None = None
    images: List[str] = []
    time: str | None = None
    organizer: str | None = None
    contributors: List[str] = []

class AchievementResponse(AchievementBase):
    id: int

    class Config:
        orm_mode = True