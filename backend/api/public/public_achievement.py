from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from db.session import get_db
from models.achievement import Achievement
from schemas.achievement_schema import AchievementPublic

router = APIRouter(prefix="/api/public/achievements", tags=["Public Achievements"])

@router.get("/", response_model=list[AchievementPublic])
def get_all_achievements(db: Session = Depends(get_db)):
    return db.query(Achievement).all()
