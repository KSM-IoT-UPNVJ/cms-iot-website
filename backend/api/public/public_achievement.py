from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from db.session import get_db
from models.achievement import Achievement
from schemas.achievement_schema import AchievementBase, AchievementResponse

router = APIRouter(prefix="/api/achievements", tags=["Achievements"])


@router.get("/", response_model=list[AchievementResponse])
def get_all_achievements(db: Session = Depends(get_db)):
    return db.query(Achievement).order_by(Achievement.time.desc()).all()


@router.post("/", response_model=AchievementResponse)
def create_achievement(payload: AchievementBase, db: Session = Depends(get_db)):
    new = Achievement(**payload.dict())
    db.add(new)
    db.commit()
    db.refresh(new)
    return new


@router.get("/{achievement_id}", response_model=AchievementResponse)
def get_achievement_detail(achievement_id: int, db: Session = Depends(get_db)):
    data = db.query(Achievement).filter_by(id=achievement_id).first()
    if not data:
        raise HTTPException(status_code=404, detail="Achievement not found")
    return data


@router.put("/{achievement_id}", response_model=AchievementResponse)
def update_achievement(achievement_id: int, payload: AchievementBase, db: Session = Depends(get_db)):
    ach = db.query(Achievement).filter_by(id=achievement_id).first()
    if not ach:
        raise HTTPException(status_code=404, detail="Achievement not found")

    for key, value in payload.dict().items():
        setattr(ach, key, value)

    db.commit()
    db.refresh(ach)
    return ach


@router.delete("/{achievement_id}")
def delete_achievement(achievement_id: int, db: Session = Depends(get_db)):
    ach = db.query(Achievement).filter_by(id=achievement_id).first()
    if not ach:
        raise HTTPException(status_code=404, detail="Achievement not found")

    db.delete(ach)
    db.commit()
    return {"message": "Achievement deleted"}
