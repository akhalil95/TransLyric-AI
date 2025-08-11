from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import router  # We'll create this

app = FastAPI(title="Music Video Translator API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # React frontend origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)
