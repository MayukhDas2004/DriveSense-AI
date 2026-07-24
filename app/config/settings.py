from pathlib import Path

# Project Root
BASE_DIR = Path(__file__).resolve().parent.parent.parent

# Dataset Folder
DATASET_DIR = BASE_DIR / "datasets"

# Trained Model Folder
MODEL_DIR = BASE_DIR / "trained_models"

# Model File
MODEL_PATH = MODEL_DIR / "vehicle_health_model.joblib"