from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv
import os

from app.database import Base
from app.models.admin import Admin
from app.utils.security import hash_password

# ------------------------
# Load ENV
# ------------------------
load_dotenv()
DATABASE_URL = os.getenv("DATABASE_URL")

if not DATABASE_URL:
    raise RuntimeError("DATABASE_URL not set")

# ------------------------
# 1. Create Database
# ------------------------
admin_url = DATABASE_URL.rsplit("/", 1)[0] + "/postgres"
db_name = DATABASE_URL.rsplit("/", 1)[1]

engine_admin = create_engine(admin_url, isolation_level="AUTOCOMMIT")

with engine_admin.connect() as conn:
    exists = conn.execute(
        text("SELECT 1 FROM pg_database WHERE datname = :name"),
        {"name": db_name}
    ).scalar()

    if not exists:
        conn.execute(text(f'CREATE DATABASE "{db_name}"'))
        print(f"✔ Database '{db_name}' created")
    else:
        print(f"✔ Database '{db_name}' already exists")
# if exists → postgres will error, that's OK

# ------------------------
# 2. Create Tables
# ------------------------
engine = create_engine(DATABASE_URL)
Base.metadata.create_all(bind=engine)
print("✔ Tables created")

# ------------------------
# 3. Seed Admin User
# ------------------------
SessionLocal = sessionmaker(bind=engine)
db = SessionLocal()

admin_exists = db.query(Admin).filter(Admin.username == "admin").first()

if not admin_exists:
    admin = Admin(
        username="admin", # < jangan lupa ganti
        password_hash=hash_password("admin123") # < jangan lupa ganti
    )
    db.add(admin)
    db.commit()
    print("✔ Admin user created (admin / admin123)")
else:
    print("✔ Admin already exists")

db.close()

print("\n🎉 Setup completed successfully")
