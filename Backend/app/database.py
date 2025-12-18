from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
import os
from dotenv import load_dotenv

load_dotenv()

db_url = os.getenv("DATABASE_URL").strip()
engine = create_engine(db_url)
SessionLocal = sessionmaker(bind=engine, autoflush=False)
Base = declarative_base()
