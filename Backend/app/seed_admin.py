from app.database import SessionLocal 
from app.models.admin import Admin 
from app.utils.security import hash_password 

db = SessionLocal() 

admin = Admin( 
    username="admin", 
    password_hash=hash_password("admin123"), 
    role="admin" ) 

db.add(admin) 
db.commit()