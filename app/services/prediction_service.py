from app.models.model_loader import ModelLoader
from app.config.settings import MODEL_PATH

loader = ModelLoader()
loader.load(MODEL_PATH)


def predict_vehicle_health(sensor_data):

    # Model not trained yet
    if loader.model is None:

        return {
            "healthScore": 95,
            "status": "Healthy",
            "prediction": "Demo Mode (Model Not Trained)",
            "confidence": 0
        }

    # Real prediction will come here later

    return {
        "prediction": "Model Loaded"
    }