from fastapi import FastAPI
from app.api.prediction import router as prediction_router

app = FastAPI(
    title="DriveSense AI Service",
    description="AI Microservice for Vehicle Health Monitoring",
    version="1.0.0"
)
app.include_router(prediction_router)

@app.get("/")
def root():
    return {
        "message": "DriveSense AI Service Running",
        "version": "1.0.0",
        "status": "Healthy"
    }

@app.get("/health")
def health():
    return {
        "service": "DriveSense AI",
        "status": "Running"
    }