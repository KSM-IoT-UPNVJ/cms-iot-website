from fastapi import Request, HTTPException

SESSION_COOKIE_NAME = "ADMIN_SESSION"

def require_admin_session(request: Request):
    admin_id = request.cookies.get(SESSION_COOKIE_NAME)
    if not admin_id:
        raise HTTPException(status_code=401, detail="Unauthorized")
    return int(admin_id)
