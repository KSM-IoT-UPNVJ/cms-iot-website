from fastapi import FastAPI

from backend.db.database import Base, engine
from backend.api.admin.iot_insight import router as admin_router_insight
from backend.api.admin.our_program import router as admin_router_our_program
from backend.api.admin.projects import router as admin_router_projects
from backend.api.admin.achievement import router as admin_router_achievement

app = FastAPI()

Base.metadata.create_all(bind=engine)

app.include_router(admin_router_insight)
app.include_router(admin_router_our_program)
app.include_router(admin_router_projects)
app.include_router(admin_router_achievement)