from fastapi import APIRouter, Depends, HTTPException, Response
from sqlalchemy.orm import Session
from db.session import get_db
from models.admin import Admin
from core.security import verify_password
from schemas.admin_schema import AdminLogin
from core.session_guard import SESSION_COOKIE_NAME

router = APIRouter(prefix="/auth", tags=["Auth"])

@router.post("/login")
def login(data: AdminLogin, response: Response, db: Session = Depends(get_db)):
    admin = db.query(Admin).filter(Admin.username == data.username).first()

    if not admin or not verify_password(data.password, admin.password_hash):
        raise HTTPException(status_code=401, detail="Invalid username or password")

    response.set_cookie(
        key=SESSION_COOKIE_NAME,
        value=str(admin.id),
        httponly=True,
        max_age=60 * 60 * 6,
        samesite="strict"
    )

    return {"message": "Login successful"}

@router.post("/logout")
def logout(response: Response):
    response.delete_cookie(SESSION_COOKIE_NAME)
    return {"message": "Logged out"}
