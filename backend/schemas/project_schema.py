# backend/schemas/project_schema.py
from pydantic import BaseModel
from typing import List, Optional, Any

class HeadMember(BaseModel):
    name: str
    title: Optional[str] = None
    image: Optional[str] = None

class ProjectPublic(BaseModel):
    slug: str
    title: str
    description: Optional[str] = None
    image: Optional[str] = None

class ProjectDetail(ProjectPublic):
    division: Optional[str] = None
    date: Optional[str] = None
    division_image: Optional[str] = None
    hm: Optional[List[HeadMember]] = None

    class Config:
        orm_mode = True