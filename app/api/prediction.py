from fastapi import APIRouter

from app.schemas.prediction_schema import (
    PredictionRequest,
    PredictionResponse,
)
from app.services.prediction_service import predict_fault

router = APIRouter()


@router.post(
    "/predict",
    response_model=PredictionResponse,
)
def predict(request: PredictionRequest):
    result = predict_fault(request.model_dump())

    return result