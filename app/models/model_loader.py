import joblib


MODEL = None
LABEL_ENCODER = None
FEATURE_NAMES = None

def load_model():
    """
    Load the trained model and label encoder.
    """

    global MODEL
    global LABEL_ENCODER
    global FEATURE_NAMES

    if MODEL is None:
        MODEL = joblib.load("trained_models/best_model.pkl")
    if FEATURE_NAMES is None:
        FEATURE_NAMES = joblib.load(
        "trained_models/feature_names.pkl"
        )
    if LABEL_ENCODER is None:
        LABEL_ENCODER = joblib.load(
            "trained_models/label_encoder.pkl"
        )

    return MODEL, LABEL_ENCODER, FEATURE_NAMES