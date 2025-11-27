from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from db.session import get_db
from models.program import Program
from schemas.program_schema import ProgramPublic

router = APIRouter(prefix="/api/public/programs", tags=["Public Programs"])

@router.get("/", response_model=list[ProgramPublic])
def get_all_programs(db: Session = Depends(get_db)):
    return db.query(Program).all()

@router.get("/{slug}", response_model=ProgramPublic)
def get_program(slug: str, db: Session = Depends(get_db)):
    program = db.query(Program).filter(Program.slug == slug).first()
    return program