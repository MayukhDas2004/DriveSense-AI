from sklearn.tree import DecisionTreeClassifier
import joblib
from sklearn.ensemble import (
    RandomForestClassifier,
    ExtraTreesClassifier,
    GradientBoostingClassifier,
)
from sklearn.model_selection import cross_val_score
from sklearn.metrics import (
    accuracy_score,
    precision_score,
    recall_score,
    f1_score,
    classification_report,
    confusion_matrix,
)


def train_models(X_train, X_test, y_train, y_test):
    """
    Train multiple machine learning models and compare performance.
    """

    models = {
        "Decision Tree": DecisionTreeClassifier(random_state=42),
        "Random Forest": RandomForestClassifier(
            n_estimators=100,
            random_state=42,
        ),
        "Extra Trees": ExtraTreesClassifier(
            n_estimators=100,
            random_state=42,
        ),
        "Gradient Boosting": GradientBoostingClassifier(
            random_state=42,
        ),
    }

    results = {}

    best_model = None
    best_accuracy = 0

    for name, model in models.items():

        model.fit(X_train, y_train)
        cv_scores = cross_val_score(
        model,
        X_train,
        y_train,
        cv=5,
        scoring="accuracy",
        )

        cv_mean = cv_scores.mean()

        predictions = model.predict(X_test)

        report = classification_report(
            y_test,
            predictions,
            output_dict=True,
            zero_division=0,)
        
        matrix = confusion_matrix(
            y_test,
            predictions,)
        
        accuracy = accuracy_score(y_test, predictions)

        precision = precision_score(
            y_test,
            predictions,
            average="weighted",
            zero_division=0,
        )

        recall = recall_score(
            y_test,
            predictions,
            average="weighted",
            zero_division=0,
        )

        f1 = f1_score(
            y_test,
            predictions,
            average="weighted",
            zero_division=0,
        )

        results[name] = {
            "accuracy": accuracy,
            "precision": precision,
            "recall": recall,
            "f1": f1,
            "cv_accuracy": cv_mean,
            "report": report,
            "confusion_matrix": matrix,
        }

        if accuracy > best_accuracy:
            best_accuracy = accuracy
            best_model = model

    return results, best_model
def save_model(model, label_encoder, feature_names):
    """
    Save the trained model and label encoder.
    """

    joblib.dump(model, "trained_models/best_model.pkl")
    joblib.dump(label_encoder, "trained_models/label_encoder.pkl")
    joblib.dump(
        feature_names,
        "trained_models/feature_names.pkl"
    )   
    print("\nModel saved successfully.")