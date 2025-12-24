from fastapi import APIRouter, Depends
from app.dependencies.auth import admin_required

router = APIRouter(prefix="/admin", tags=["Admin"])

@router.get("/dashboard", dependencies=[Depends(admin_required)])
def dashboard():
    return {"message": "Welcome admin"}
