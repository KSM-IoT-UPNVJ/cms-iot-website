from pydantic import BaseModel
from typing import List


class AchievementBase(BaseModel):
    title: str
    award: str
    description: str
    image: str              # main thumbnail
    images: List[str]       # multiple images
    time: str
    organizer: str
    contributors: List[str]  # list of names


class AchievementCreate(AchievementBase):
    pass


class AchievementUpdate(AchievementBase):
    pass


class AchievementResponse(AchievementBase):
    id: int

    class Config:
        from_attributes = True  # replaces orm_mode in Pydantic v2
