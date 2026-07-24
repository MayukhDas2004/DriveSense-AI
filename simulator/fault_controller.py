from faults import FAULTS
import random

current_fault = "normal"
remaining_cycles = 0


def get_fault():
    global current_fault, remaining_cycles

    if remaining_cycles <= 0:
        current_fault = random.choice(FAULTS)
        remaining_cycles = random.randint(20, 60)

    remaining_cycles -= 1

    return current_fault


def set_fault(fault_name):
    global current_fault, remaining_cycles

    if fault_name in FAULTS:
        current_fault = fault_name
        remaining_cycles = random.randint(20, 60)