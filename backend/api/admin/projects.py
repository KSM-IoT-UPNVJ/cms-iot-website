from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from backend.db.session import get_db
from backend.models.projects import ProjectsData, ProjectMember
from backend.schemas.project_schema import (
    ProjectCreate, ProjectUpdate, ProjectResponse,
    MemberCreate, MemberUpdate, MemberResponse
)

router = APIRouter(prefix="/admin/projects", tags=["Admin - Projects"])

@router.post("/", response_model=ProjectResponse)
def create_project(data: ProjectCreate, db: Session = Depends(get_db)):
    new_item = ProjectsData(**data.dict())
    db.add(new_item)
    db.commit()
    db.refresh(new_item)
    return new_item

@router.get("/", response_model=list[ProjectResponse])
def get_all_projects(db: Session = Depends(get_db)):
    items = db.query(ProjectsData).all()
    return items

@router.get("/{project_id}", response_model=ProjectResponse)
def get_project(project_id: int, db: Session = Depends(get_db)):
    item = db.query(ProjectsData).filter(ProjectsData.id == project_id).first()
    if not item:
        raise HTTPException(status_code=404, detail="Project not found")
    return item

@router.put("/{project_id}", response_model=ProjectResponse)
def update_project(project_id: int, data: ProjectUpdate, db: Session = Depends(get_db)):
    item = db.query(ProjectsData).filter(ProjectsData.id == project_id).first()

    if not item:
        raise HTTPException(status_code=404, detail="Project not found")

    for key, value in data.dict().items():
        setattr(item, key, value)

    db.commit()
    db.refresh(item)
    return item

@router.delete("/{project_id}")
def delete_project(project_id: int, db: Session = Depends(get_db)):
    item = db.query(ProjectsData).filter(ProjectsData.id == project_id).first()

    if not item:
        raise HTTPException(status_code=404, detail="Project not found")

    db.delete(item)
    db.commit()
    return {"message": "Project deleted"}

@router.post("/{project_id}/members", response_model=MemberResponse)
def add_member(project_id: int, data: MemberCreate, db: Session = Depends(get_db)):
    project = db.query(ProjectsData).filter(ProjectsData.id == project_id).first()
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")

    new_member = ProjectMember(project_id=project_id, **data.dict())
    db.add(new_member)
    db.commit()
    db.refresh(new_member)
    return new_member

@router.get("/{project_id}/members", response_model=list[MemberResponse])
def get_members(project_id: int, db: Session = Depends(get_db)):
    members = db.query(ProjectMember).filter(ProjectMember.project_id == project_id).all()
    return members

@router.put("/members/{member_id}", response_model=MemberResponse)
def update_member(member_id: int, data: MemberUpdate, db: Session = Depends(get_db)):
    member = db.query(ProjectMember).filter(ProjectMember.id == member_id).first()

    if not member:
        raise HTTPException(status_code=404, detail="Member not found")

    for key, value in data.dict().items():
        setattr(member, key, value)

    db.commit()
    db.refresh(member)
    return member

@router.delete("/members/{member_id}")
def delete_member(member_id: int, db: Session = Depends(get_db)):
    member = db.query(ProjectMember).filter(ProjectMember.id == member_id).first()

    if not member:
        raise HTTPException(status_code=404, detail="Member not found")

    db.delete(member)
    db.commit()
    return {"message": "Member deleted"}
