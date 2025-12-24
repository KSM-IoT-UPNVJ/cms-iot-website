from pydantic import BaseModel, Field
from typing import List, Optional


class HMStaffSchema(BaseModel):
    name: str
    title: str
    image: str

    class Config:
        from_attributes = True


class OurProgramBase(BaseModel):
    slug: str
    title: str
    githubLink: Optional[str] = None
    description: str
    division: str
    date: str
    divisionImage: str
    image: str
    subtitle2: Optional[str] = None
    description2: Optional[str] = None
    image2: Optional[str] = None
    subtitle3: Optional[str] = None
    description3: Optional[str] = None
    hm: List[HMStaffSchema] = Field(default_factory=list)


class OurProgramCreate(OurProgramBase):
    pass


class OurProgramUpdate(BaseModel):
    title: Optional[str] = None
    githubLink: Optional[str] = None
    description: Optional[str] = None
    division: Optional[str] = None
    date: Optional[str] = None
    divisionImage: Optional[str] = None
    image: Optional[str] = None
    subtitle2: Optional[str] = None
    description2: Optional[str] = None
    image2: Optional[str] = None
    subtitle3: Optional[str] = None
    description3: Optional[str] = None
    hm: Optional[List[HMStaffSchema]] = None


class OurProgramResponse(OurProgramBase):
    id: int

    class Config:
        from_attributes = True
