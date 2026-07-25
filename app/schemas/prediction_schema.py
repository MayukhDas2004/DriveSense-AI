from pydantic import BaseModel


class PredictionRequest(BaseModel):
    engine_temperature: float
    engine_rpm: int
    vehicle_speed: float
    battery_voltage: float
    battery_health: float
    oil_temperature: float
    coolant_temperature: float
    brake_condition: float
    tire_pressure: float
    engine_vibration: float
    fuel_level: float
    engine_load: float


class PredictionResponse(BaseModel):
    predicted_fault: str
    confidence: float
    status: str
    health_score: int
    recommended_action: str