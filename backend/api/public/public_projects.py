# backend/api/public/public_projects.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from db.session import get_db
from models.projects import Project
from schemas.project_schema import ProjectPublic, ProjectDetail
import json

router = APIRouter(prefix="/api/public/projects", tags=["Public Projects"])

@router.get("/", response_model=list[ProjectPublic])
def get_projects(db: Session = Depends(get_db)):
    projects = db.query(Project).order_by(Project.id.desc()).all()
    # convert hm field from JSON string -> not included in ProjectPublic
    return projects

@router.get("/{slug}", response_model=ProjectDetail)
def get_project_detail(slug: str, db: Session = Depends(get_db)):
    project = db.query(Project).filter(Project.slug == slug).first()
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    # if hm is stored as JSON string, parse it
    try:
        if project.hm:
            project.hm = json.loads(project.hm)
    except Exception:
        # leave as-is if cannot parse
        pass
    return project