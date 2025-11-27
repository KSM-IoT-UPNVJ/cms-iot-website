from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from db.session import get_db
from models.projects import Project
from schemas.project_schema import ProjectPublic

router = APIRouter(prefix="/api/public/projects", tags=["Public Projects"])

@router.get("/", response_model=list[ProjectPublic])
def get_all_projects(db: Session = Depends(get_db)):
    return db.query(Project).all()