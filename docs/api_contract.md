# DriveSense AI - API Contract

## 1. Purpose

This document defines how different parts of DriveSense AI communicate with each other.

The main communication is between:

- Vehicle Data Simulator
- Backend Server
- AI Engine
- Frontend Dashboard

All data exchange will use JSON format.

---

# 2. Vehicle Sensor Data API

## Endpoint

POST /api/vehicle/data

## Purpose

Receive real-time vehicle sensor data from the vehicle simulator.

## Request Format

```json
{
  "vehicle_id": "VH001",
  "timestamp": "2026-07-23T19:00:00",
  "sensor_data": {
    "temperature": 75,
    "battery_voltage": 12.6,
    "engine_rpm": 2500,
    "speed": 60,
    "vibration": 0.25,
    "fuel_level": 65
  }
}
```

## Response Format

```json
{
  "status": "success",
  "message": "Vehicle data received"
}
```

---

# 3. Vehicle Status API

## Endpoint

GET /api/vehicle/{vehicle_id}/status

## Purpose

Fetch the current condition of a vehicle.

## Response Format

```json
{
  "vehicle_id": "VH001",
  "health_score": 92,
  "status": "Healthy",
  "last_updated": "2026-07-23T19:05:00"
}
```

---

# 4. AI Prediction API

## Endpoint

POST /api/ai/predict

## Purpose

Send vehicle sensor data to the AI model for analysis.

## Request Format

```json
{
  "vehicle_id": "VH001",
  "temperature": 90,
  "vibration": 0.8,
  "battery_voltage": 11.5
}
```

## Response Format

```json
{
  "prediction": "Possible Engine Problem",
  "risk_level": "High",
  "confidence": 87
}
```

---

# 5. Vehicle Health API

## Endpoint

GET /api/vehicle/{vehicle_id}/health

## Purpose

Retrieve vehicle health score.

## Response Format

```json
{
  "vehicle_id": "VH001",
  "health_score": 85,
  "status": "Good"
}
```

---

# 6. Alert API

## Endpoint

GET /api/alerts/{vehicle_id}

## Purpose

Retrieve vehicle warning alerts.

## Response Format

```json
{
  "alerts": [
    {
      "type": "Temperature",
      "message": "Engine temperature is high",
      "severity": "Warning"
    }
  ]
}
```

---

# 7. Maintenance Recommendation API

## Endpoint

GET /api/maintenance/{vehicle_id}

## Purpose

Get AI-generated maintenance suggestions.

## Response Format

```json
{
  "recommendation": [
    "Check engine cooling system",
    "Inspect battery condition"
  ],
  "next_service": "500 km"
}
```

---

# 8. Communication Flow

```
Vehicle Sensors
       |
       |
       v
Vehicle Data API
       |
       v
Backend Server
       |
       +----------------+
       |                |
       v                v
   Database          AI Model
                         |
                         v
                 Prediction Result
                         |
                         v
                Frontend Dashboard
```

---

# 9. Rules

- All communication uses JSON format.
- Every vehicle must have a unique vehicle_id.
- Timestamp must be included with sensor data.
- Backend validates incoming data.
- AI results are stored for future analysis.
- Frontend only communicates with backend APIs.