from app.database import engine, Base
from app.models import admin  # make sure models are imported

Base.metadata.create_all(bind=engine)
print("Tables created")