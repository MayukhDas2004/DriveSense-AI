import time
from vehicle_data import generate_vehicle_data
from config import UPDATE_INTERVAL

print("DriveSense AI Vehicle Sensor Simulator Started...\n")

while True:
    vehicle_data = generate_vehicle_data()

    print(vehicle_data)

    time.sleep(UPDATE_INTERVAL)