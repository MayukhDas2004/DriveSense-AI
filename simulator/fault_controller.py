# Available faults

CURRENT_FAULT = "engine_overheating"

FAULTS = [
    "normal",
    "engine_overheating",
    "low_battery",
    "brake_failure",
    "low_tire_pressure",
    "high_vibration"
]


def get_fault():
    return CURRENT_FAULT


def set_fault(fault_name):
    global CURRENT_FAULT

    if fault_name in FAULTS:
        CURRENT_FAULT = fault_name