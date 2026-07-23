# DriveSense AI - AI Flow Documentation

## 1. Purpose

This document explains how Artificial Intelligence is used in DriveSense AI.

The AI system analyzes vehicle sensor data and provides:

- Anomaly detection
- Vehicle health score
- Failure prediction
- Maintenance recommendations

---

# 2. AI System Overview

```
Vehicle Sensor Data
          |
          |
          v
     Data Processing
          |
          |
          v
    AI Machine Learning Model
          |
          |
          +----------------+
          |                |
          v                v
   Anomaly Detection   Failure Prediction
          |
          |
          v
 Maintenance Recommendation
          |
          |
          v
    Frontend Dashboard
```

---

# 3. AI Input Data

The AI model receives:

| Input Parameter | Description |
|---|---|
| Temperature | Engine temperature value |
| Battery Voltage | Battery condition |
| Engine RPM | Engine performance |
| Speed | Vehicle movement |
| Vibration | Mechanical abnormality |
| Fuel Level | Fuel condition |

Example AI Input:

```json
{
  "temperature": 90,
  "battery_voltage": 11.5,
  "engine_rpm": 3000,
  "speed": 70,
  "vibration": 0.8
}
```

---

# 4. Data Processing

Before entering the AI model:

1. Sensor data is collected.
2. Missing values are handled.
3. Data is normalized.
4. Important features are selected.
5. Processed data is sent to the model.

---

# 5. AI Models

Possible models:

## Anomaly Detection

Purpose:

Detect unusual vehicle behaviour.

Possible algorithms:

- Isolation Forest
- Autoencoder
- One-Class SVM


## Failure Prediction

Purpose:

Predict possible vehicle problems.

Possible algorithms:

- Random Forest
- Decision Tree
- Neural Network


## Health Score Calculation

The system calculates vehicle health between:

```
0 - 100
```

Example:

```
90-100 : Healthy
70-90  : Good
40-70  : Warning
0-40   : Critical
```

---

# 6. AI Output Format

Example:

```json
{
  "vehicle_id": "VH001",
  "health_score": 85,
  "anomaly": false,
  "prediction": "Battery Issue Possible",
  "risk_level": "Medium",
  "confidence": 82
}
```

---

# 7. AI Communication Flow

```
Backend
   |
   |
   v
AI API
   |
   |
   v
Machine Learning Model
   |
   |
   v
Prediction Result
   |
   |
   v
Database + Dashboard
```

---

# 8. AI Development Responsibility

Member 3 responsibilities:

- Collect training data
- Perform data preprocessing
- Train ML model
- Test model accuracy
- Create prediction API connection
- Provide output format to backend

---

# 9. Future AI Improvements

Future additions:

- Deep learning models
- Real vehicle datasets
- Edge AI deployment
- Real-time prediction optimization
- Remaining Useful Life (RUL) prediction