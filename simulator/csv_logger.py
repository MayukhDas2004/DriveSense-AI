import csv
import os

CSV_FILE = "vehicle_dataset.csv"

def save_to_csv(vehicle_data):
    file_exists = os.path.isfile(CSV_FILE)

    with open(CSV_FILE, "a", newline="") as file:
        writer = csv.DictWriter(file, fieldnames=vehicle_data.keys())

        if not file_exists:
            writer.writeheader()

        writer.writerow(vehicle_data)