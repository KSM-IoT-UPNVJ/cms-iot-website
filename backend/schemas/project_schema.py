from pydantic import BaseModel

class ProjectPublic(BaseModel):
    id: int
    name: str
    description: str
    repo_url: str
    thumbnail: str

    class Config:
        orm_mode = True