from pydantic import BaseModel
from typing import List

class AchievementImageResponse(BaseModel):
    id: int
    image_url: str

    class Config:
        from_attributes = True


class AchievementContributorResponse(BaseModel):
    id: int
    name: str

    class Config:
        from_attributes = True


class AchievementBase(BaseModel):
    title: str
    award: str
    description: str
    image: str
    time: str
    organizer: str


class AchievementCreate(AchievementBase):
    images: List[str]
    contributors: List[str]


class AchievementUpdate(AchievementCreate):
    pass


class AchievementResponse(AchievementBase):
    id: int
    images: List[AchievementImageResponse]
    contributors: List[AchievementContributorResponse]

    class Config:
        from_attributes = True
