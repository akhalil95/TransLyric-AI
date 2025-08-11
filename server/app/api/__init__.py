from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def root():
    return {"message": "Music Video Translator API running"}

# Add your API endpoints here later
