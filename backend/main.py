from fastapi import FastAPI
from db.database import Base, engine

# Public API
from api.auth.login import router as auth_router
from api.admin.protected_example import admin_router
from api.public.public_ourprogram import router as public_OurProgram_router
from api.public.public_achievement import router as public_achievement_router
from api.public.public_insight import router as public_insight_router
from api.public.public_projects import router as public_projects_router

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Create tables
Base.metadata.create_all(bind=engine)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register Public Routes
app.include_router(auth_router)
app.include_router(admin_router)
app.include_router(public_OurProgram_router)
app.include_router(public_achievement_router)
app.include_router(public_insight_router)
app.include_router(public_projects_router)

@app.get("/")
def root():
    return {"message": "Public API Running!"}