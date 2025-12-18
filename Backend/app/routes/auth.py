from fastapi import APIRouter, Depends, HTTPException, Request
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app.models.admin import Admin
from app.utils.security import verify_password
from pydantic import BaseModel

class LoginRequest(BaseModel):
    username: str
    password: str

router = APIRouter(prefix="/auth", tags=["Auth"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/login")
def login(
    request: Request,
    data: LoginRequest,
    db: Session = Depends(get_db)
):
    admin = db.query(Admin).filter(Admin.username == data.username).first()

    if not admin or not verify_password(data.password, admin.password_hash):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    request.session["admin_id"] = admin.id
    request.session["role"] = admin.role

    return {"message": "Login success"}

@router.post("/logout") 
def logout(request: Request): 
    request.session.clear() 
    return {"message": "Logged out"}