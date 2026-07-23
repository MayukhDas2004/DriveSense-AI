# DriveSense AI - Database Schema

## 1. Purpose

This document defines how DriveSense AI stores and manages data.

The database stores:

- Vehicle information
- Sensor readings
- AI predictions
- Alerts
- Maintenance records

---

# 2. Database Structure

The system will contain the following tables:

1. Vehicles
2. Sensor_Data
3. AI_Predictions
4. Alerts
5. Maintenance

---

# 3. Vehicles Table

Stores basic vehicle information.

| Column | Data Type | Description |
|---|---|---|
| vehicle_id | VARCHAR | Unique vehicle identifier |
| owner_name | VARCHAR | Vehicle owner name |
| vehicle_model | VARCHAR | Vehicle model |
| registration_no | VARCHAR | Registration number |
| created_at | TIMESTAMP | Account creation time |

Example:

```
VH001 | Rahul | Tesla Model 3 | WB1234 | 2026-07-23
```

---

# 4. Sensor_Data Table

Stores real-time sensor readings.

| Column | Data Type | Description |
|---|---|---|
| sensor_id | INT | Unique sensor record ID |
| vehicle_id | VARCHAR | Connected vehicle |
| temperature | FLOAT | Engine temperature |
| battery_voltage | FLOAT | Battery voltage |
| engine_rpm | INT | Engine speed |
| speed | FLOAT | Vehicle speed |
| vibration | FLOAT | Vibration value |
| fuel_level | FLOAT | Fuel percentage |
| timestamp | TIMESTAMP | Data collection time |

---

# 5. AI_Predictions Table

Stores AI model results.

| Column | Data Type | Description |
|---|---|---|
| prediction_id | INT | Unique prediction ID |
| vehicle_id | VARCHAR | Vehicle reference |
| health_score | FLOAT | Vehicle health percentage |
| prediction | VARCHAR | AI prediction result |
| risk_level | VARCHAR | Risk category |
| confidence | FLOAT | Model confidence |
| created_at | TIMESTAMP | Prediction time |

---

# 6. Alerts Table

Stores vehicle warnings.

| Column | Data Type | Description |
|---|---|---|
| alert_id | INT | Unique alert ID |
| vehicle_id | VARCHAR | Vehicle reference |
| alert_type | VARCHAR | Alert category |
| message | TEXT | Alert description |
| severity | VARCHAR | Warning level |
| created_at | TIMESTAMP | Alert time |

---

# 7. Maintenance Table

Stores maintenance history.

| Column | Data Type | Description |
|---|---|---|
| maintenance_id | INT | Unique maintenance ID |
| vehicle_id | VARCHAR | Vehicle reference |
| recommendation | TEXT | AI suggestion |
| service_date | DATE | Maintenance date |
| next_service | VARCHAR | Next service requirement |

---

# 8. Database Relationship

```
Vehicles
    |
    |
    +------------ Sensor_Data
    |
    +------------ AI_Predictions
    |
    +------------ Alerts
    |
    +------------ Maintenance
```

---

# 9. Data Flow

1. Vehicle sends sensor data.
2. Backend stores sensor readings.
3. AI model analyzes sensor data.
4. Prediction results are stored.
5. Alerts are generated if abnormal conditions occur.
6. Maintenance recommendations are saved.

---

# 10. Future Expansion

Possible additions:

- User authentication table
- Multiple vehicle support
- Service center database
- Cloud database integration