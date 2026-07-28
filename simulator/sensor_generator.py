from csv_logger import save_to_csv
import time
import random
import requests

from vehicle_data import generate_vehicle_data
from config import UPDATE_INTERVAL

BACKEND_URL = "http://localhost:5000/api/sensors"

print("DriveSense AI Vehicle Sensor Simulator Started...\n")

while True:
    vehicle_data = generate_vehicle_data()

    # Save to CSV
    save_to_csv(vehicle_data)

    # Convert simulator data -> backend format
    payload = {
        "vehicleId": "V001",
        "engineTemperature": vehicle_data["engine_temperature"],
        "batteryVoltage": vehicle_data["battery_voltage"],
        "oilPressure": round(random.uniform(30, 60), 2),
        "tirePressure": vehicle_data["tire_pressure"],
        "vibration": vehicle_data["engine_vibration"],
        "speed": vehicle_data["vehicle_speed"]
    }

    try:
        response = requests.post(BACKEND_URL, json=payload)

        if response.status_code == 201:
            print("✅ Data sent successfully")
        else:
            print(f"❌ Backend Error: {response.status_code}")
            print(response.text)

    except Exception as e:
        print("❌ Connection Error:", e)

    print(vehicle_data)

    time.sleep(UPDATE_INTERVAL)