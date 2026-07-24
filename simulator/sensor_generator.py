from csv_logger import save_to_csv
import time
from vehicle_data import generate_vehicle_data
from config import UPDATE_INTERVAL

print("DriveSense AI Vehicle Sensor Simulator Started...\n")

while True:
    vehicle_data = generate_vehicle_data()

    save_to_csv(vehicle_data)

    print(vehicle_data)

    time.sleep(UPDATE_INTERVAL)