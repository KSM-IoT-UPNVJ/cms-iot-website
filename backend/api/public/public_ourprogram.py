from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from db.session import get_db
from models.ourprogram import OurProgram
from schemas.ourprogram_schema import OurProgramPublic

router = APIRouter(prefix="/api/public/ourprograms", tags=["Public OurPrograms"])

@router.get("/", response_model=list[OurProgramPublic])
def get_all_programs(db: Session = Depends(get_db)):
    return db.query(OurProgram).all()