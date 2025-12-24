from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from backend.db.session import get_db
from backend.models.our_program import OurProgram, HMStaff
from backend.schemas.our_program import (
    OurProgramCreate,
    OurProgramUpdate,
    OurProgramResponse
)

router = APIRouter(prefix="/admin/ourprogram", tags=["Admin - Our Program"])


@router.post("/", response_model=OurProgramResponse)
def create_program(data: OurProgramCreate, db: Session = Depends(get_db)):
    program = OurProgram(
        slug=data.slug,
        title=data.title,
        githubLink=data.githubLink,
        description=data.description,
        division=data.division,
        date=data.date,
        divisionImage=data.divisionImage,
        image=data.image,
        subtitle2=data.subtitle2,
        description2=data.description2,
        image2=data.image2,
        subtitle3=data.subtitle3,
        description3=data.description3,
    )

    db.add(program)
    db.commit()
    db.refresh(program)

    # Add HM staff
    for staff in data.hm:
        hm_obj = HMStaff(
            program_id=program.id,
            name=staff.name,
            title=staff.title,
            image=staff.image
        )
        db.add(hm_obj)

    db.commit()
    db.refresh(program)

    return program


@router.get("/", response_model=list[OurProgramResponse])
def get_all_programs(db: Session = Depends(get_db)):
    return db.query(OurProgram).all()


@router.get("/{slug}", response_model=OurProgramResponse)
def get_program(slug: str, db: Session = Depends(get_db)):
    program = db.query(OurProgram).filter(OurProgram.slug == slug).first()
    if not program:
        raise HTTPException(status_code=404, detail="Program not found")
    return program


@router.put("/{slug}", response_model=OurProgramResponse)
def update_program(slug: str, data: OurProgramUpdate, db: Session = Depends(get_db)):
    program = db.query(OurProgram).filter(OurProgram.slug == slug).first()
    if not program:
        raise HTTPException(status_code=404, detail="Program not found")

    for key, value in data.dict(exclude_unset=True).items():
        if key != "hm":
            setattr(program, key, value)

    # Update HM staff
    if data.hm is not None:
        db.query(HMStaff).filter(HMStaff.program_id == program.id).delete()
        for staff in data.hm:
            hm_obj = HMStaff(
                program_id=program.id,
                name=staff.name,
                title=staff.title,
                image=staff.image
            )
            db.add(hm_obj)

    db.commit()
    db.refresh(program)

    return program


@router.delete("/{slug}")
def delete_program(slug: str, db: Session = Depends(get_db)):
    program = db.query(OurProgram).filter(OurProgram.slug == slug).first()
    if not program:
        raise HTTPException(status_code=404, detail="Program not found")

    db.delete(program)
    db.commit()
    return {"message": "Program deleted"}
