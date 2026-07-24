from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score


def train_model(X_train, X_test, y_train, y_test):

    model = RandomForestClassifier(
        n_estimators=100,
        random_state=42
    )

    model.fit(X_train, y_train)

    predictions = model.predict(X_test)

    accuracy = accuracy_score(y_test, predictions)

    return model, accuracy