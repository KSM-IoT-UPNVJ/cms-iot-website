from sqlalchemy import create_engine, text
from dotenv import load_dotenv
import os

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")
if not DATABASE_URL:
    raise RuntimeError("DATABASE_URL not loaded")

admin_url = DATABASE_URL.rsplit("/", 1)[0] + "/postgres"
db_name = DATABASE_URL.rsplit("/", 1)[1]

engine = create_engine(admin_url, isolation_level="AUTOCOMMIT")

with engine.connect() as conn:
    conn.execute(text(f'CREATE DATABASE "{db_name}"'))
    print(f"Database '{db_name}' created")