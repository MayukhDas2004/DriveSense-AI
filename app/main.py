from fastapi import FastAPI

from app.api.prediction import router as prediction_router

app = FastAPI(
    title="DriveSense AI",
    version="1.0",
)

app.include_router(prediction_router)


@app.get("/")
def root():
    return {
        "message": "DriveSense AI API is running"
    }