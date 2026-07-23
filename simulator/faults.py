import random

FAULTS = [
    "normal",
    "engine_overheating",
    "low_battery",
    "brake_failure",
    "low_tire_pressure",
    "high_vibration"
]

def get_random_fault():
    return random.choice(FAULTS)