from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from db.session import get_db
from models.insight import Insight
from schemas.insight_schema import InsightPublic, InsightBase

router = APIRouter(prefix="/api/public/insights", tags=["Public Insights"])

@router.get("/", response_model=list[InsightPublic])
def get_all_insights(db: Session = Depends(get_db)):
    return db.query(Insight).all()