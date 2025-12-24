from fastapi import Request, HTTPException

def admin_required(request: Request):
    if "admin_id" not in request.session:
        raise HTTPException(status_code=401, detail="Unauthorized")
