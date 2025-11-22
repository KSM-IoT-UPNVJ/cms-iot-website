from fastapi import APIRouter, Depends
from core.session_guard import require_admin_session

admin_router = APIRouter(prefix="/admin", tags=["Admin"])

@admin_router.get("/dashboard")
def dashboard(admin_id: int = Depends(require_admin_session)):
    return {"message": "Welcome to admin dashboard", "admin_id": admin_id}
