# DriveSense AI - System Architecture

## 1. Project Overview

DriveSense AI is an intelligent vehicle monitoring and predictive maintenance system.

The system collects real-time vehicle sensor data, processes it using AI models, detects anomalies, predicts maintenance requirements, and displays vehicle health information through an interactive dashboard.

---

# 2. High-Level System Flow
Vehicle Sensors
|
|
v
Data Collection Layer
|
|
v
Backend API Server
|
+----------------+
| |
v v
Database AI Engine
| |
| |
+----------------+
|
v
Health Analysis
|
v
Frontend Dashboard


---

# 3. System Components

## A. Vehicle Data Layer (Member 4)

Responsibilities:

- Collect vehicle sensor readings
- Send real-time sensor data
- Simulate vehicle conditions
- Provide data through communication module

Input:

- Temperature
- Engine parameters
- Battery voltage
- Vibration
- Speed
- Fuel level
- Distance travelled

Output:

JSON sensor packets sent to backend.

---

## B. Backend Layer (Member 2)

Technology:

- Node.js / Express
- REST API
- Database connection

Responsibilities:

- Receive sensor data
- Store vehicle information
- Communicate with AI model
- Provide data to frontend
- Manage users and vehicles

---

## C. Database Layer

Stores:

- Vehicle details
- Sensor history
- AI predictions
- Alerts
- Maintenance records

---

## D. AI Engine (Member 3)

Responsibilities:

- Detect abnormal behaviour
- Calculate vehicle health score
- Predict possible failures
- Generate maintenance recommendations

Input:

Vehicle sensor data

Output:

- Anomaly status
- Failure prediction
- Health score
- Maintenance suggestion

---

## E. Frontend Dashboard (Member 1)

Technology:

- React

Responsibilities:

Display:

- Live sensor values
- Vehicle health score
- AI predictions
- Warning alerts
- Maintenance history

---

# 4. Data Flow

1. Vehicle collects sensor readings.

2. Sensor data is converted into JSON format.

3. Backend receives data through API.

4. Backend stores data in database.

5. AI model analyzes sensor patterns.

6. AI returns prediction results.

7. Frontend displays vehicle condition.

---

# 5. Communication Architecture

Vehicle
|
| Sensor Data
|
Backend API
|
|---- Database
|
|---- AI Model
|
Frontend Dashboard


---

# 6. Development Responsibility

| Member | Responsibility |
|--------|----------------|
| Member 1 | Frontend Dashboard |
| Member 2 | Backend API + Database |
| Member 3 | AI Model |
| Member 4 | Sensor/Data Simulation |
| Member 5 | Architecture + Integration + Team Management |

---

# 7. Future Expansion

Possible future features:

- Edge AI processing
- Mobile application
- Multiple vehicle support
- IoT cloud integration
- Advanced predictive maintenance