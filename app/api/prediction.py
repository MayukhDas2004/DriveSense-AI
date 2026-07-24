from fastapi import APIRouter

from app.schemas.prediction_schema import PredictionRequest
from app.services.prediction_service import predict_vehicle_health

router = APIRouter()


@router.post("/predict")
def predict(request: PredictionRequest):

    result = predict_vehicle_health(request.dict())

    return result