from app.database import engine 
from app.models.admin import Admin 

Admin.metadata.create_all(bind=engine)