from pydantic import BaseModel


class PredictionRequest(BaseModel):
    engineTemperature: float
    batteryVoltage: float
    oilPressure: float
    tirePressure: float
    vibration: float
    speed: float