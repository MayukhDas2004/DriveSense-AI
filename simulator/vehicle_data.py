from fault_controller import get_fault
import random
from config import *

# Initial vehicle state
vehicle_state = {
    "engine_temperature": 80.0,
    "engine_rpm": 900,
    "vehicle_speed": 0.0,
    "battery_voltage": 12.8,
    "battery_health": 100.0,
    "oil_temperature": 75.0,
    "coolant_temperature": 78.0,
    "brake_condition": 100.0,
    "tire_pressure": 32.0,
    "engine_vibration": 0.5,
    "fuel_level": 100.0,
    "engine_load": 20.0
}


def generate_vehicle_data():
    
    global vehicle_state

    # Speed changes slowly
    vehicle_state["vehicle_speed"] += random.uniform(-5, 5)
    vehicle_state["vehicle_speed"] = max(0, min(180, vehicle_state["vehicle_speed"]))

    # RPM depends on speed
    vehicle_state["engine_rpm"] = int(
        800 + vehicle_state["vehicle_speed"] * 25 + random.randint(-100, 100)
    )

    # Temperature depends on RPM
    vehicle_state["engine_temperature"] += (
        vehicle_state["engine_rpm"] - 800
    ) / 8000 + random.uniform(-0.3, 0.3)

    # Oil temperature follows engine temperature
    vehicle_state["oil_temperature"] = (
        vehicle_state["engine_temperature"] - 5 + random.uniform(-1, 1)
    )

    # Coolant temperature
    vehicle_state["coolant_temperature"] = (
        vehicle_state["engine_temperature"] - 3 + random.uniform(-1, 1)
    )

    # Engine load
    vehicle_state["engine_load"] = min(
        100,
        max(10, vehicle_state["vehicle_speed"] / 2 + random.uniform(-5, 5))
    )

    # Engine vibration
    vehicle_state["engine_vibration"] = round(
        0.5 + vehicle_state["engine_rpm"] / 3000 + random.uniform(-0.2, 0.2),
        2,
    )

    # Fuel decreases slowly
    vehicle_state["fuel_level"] = max(
        0,
        vehicle_state["fuel_level"] - random.uniform(0.02, 0.08),
    )

    # Battery health decreases very slowly
    vehicle_state["battery_health"] = max(
        60,
        vehicle_state["battery_health"] - random.uniform(0.001, 0.005),
    )

    # Battery voltage
    vehicle_state["battery_voltage"] = round(
        12.5 + random.uniform(-0.2, 0.3),
        2,
    )

    # Brake wear
    vehicle_state["brake_condition"] = max(
        50,
        vehicle_state["brake_condition"] - random.uniform(0.001, 0.01),
    )

    # Tire pressure
    vehicle_state["tire_pressure"] += random.uniform(-0.05, 0.05)


    # Get current fault
    fault = get_fault()

    if fault == "engine_overheating":
        vehicle_state["engine_temperature"] = 120

    elif fault == "low_battery":
        vehicle_state["battery_voltage"] = 11.2
        vehicle_state["battery_health"] = 55

    elif fault == "brake_failure":
        vehicle_state["brake_condition"] = 30

    elif fault == "low_tire_pressure":
        vehicle_state["tire_pressure"] = 24

    elif fault == "high_vibration":
        vehicle_state["engine_vibration"] = 5.5

    vehicle_state["current_fault"] = fault

    return vehicle_state