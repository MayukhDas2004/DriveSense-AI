from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder


def preprocess_data(df):
    """
    Preprocess the vehicle dataset.
    """

    # Features
    X = df.drop(columns=["current_fault"])
    feature_names = list(X.columns)
    # Target
    y = df["current_fault"]

    # Encode labels
    label_encoder = LabelEncoder()
    y_encoded = label_encoder.fit_transform(y)

    # Train-Test Split
    X_train, X_test, y_train, y_test = train_test_split(
        X,
        y_encoded,
        test_size=0.2,
        random_state=42,
        stratify=y_encoded,
    )

    return (
        X_train,
        X_test,
        y_train,
        y_test,
        label_encoder,
        feature_names,
    )