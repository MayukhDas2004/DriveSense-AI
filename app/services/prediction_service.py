import pandas as pd

from app.models.model_loader import load_model
FAULT_DETAILS = {
    "normal": {
        "status": "Healthy",
        "health_score": 100,
        "recommended_action": "No action required."
    },
    "engine_overheating": {
        "status": "Critical",
        "health_score": 15,
        "recommended_action": "Stop the vehicle and inspect the cooling system immediately."
    },
    "low_battery": {
        "status": "Warning",
        "health_score": 45,
        "recommended_action": "Recharge or replace the battery."
    },
    "brake_failure": {
        "status": "Critical",
        "health_score": 10,
        "recommended_action": "Inspect the braking system immediately."
    },
    "low_tire_pressure": {
        "status": "Warning",
        "health_score": 65,
        "recommended_action": "Inflate the tyres to the recommended pressure."
    },
    "high_vibration": {
        "status": "Warning",
        "health_score": 40,
        "recommended_action": "Inspect the engine mounts and rotating components."
    }
}


def predict_fault(sensor_data):
    """
    Predict the vehicle fault from sensor data.
    """

    model, encoder, feature_names = load_model()

    df = pd.DataFrame([sensor_data])
    df = df[feature_names]

    prediction = model.predict(df)[0]

    predicted_fault = encoder.inverse_transform([prediction])[0]

    probabilities = model.predict_proba(df)[0]

    confidence = float(max(probabilities) * 100)

    details = FAULT_DETAILS[predicted_fault]

    return {
        "predicted_fault": predicted_fault,
        "confidence": round(confidence, 2),
        "status": details["status"],
        "health_score": details["health_score"],
        "recommended_action": details["recommended_action"]
    }