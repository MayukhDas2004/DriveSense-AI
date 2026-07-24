import joblib
from pathlib import Path


class ModelLoader:

    def __init__(self):
        self.model = None

    def load(self, model_path: Path):

        if model_path.exists():
            self.model = joblib.load(model_path)
            print("✅ ML Model Loaded")

        else:
            print("⚠ No trained model found.")

    def predict(self, data):

        if self.model is None:
            raise Exception("Model not loaded.")

        return self.model.predict(data)