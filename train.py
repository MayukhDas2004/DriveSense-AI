from app.training.data_loader import load_dataset
from app.training.preprocessing import preprocess_data
from app.training.trainer import train_models, save_model

def main():

    dataset = load_dataset("datasets/vehicle_dataset.csv")
    (X_train, X_test, y_train, y_test, encoder, feature_names,) = preprocess_data(dataset)

    results, best_model = train_models(
        X_train,
        X_test,
        y_train,
        y_test,
    )
    save_model(best_model, encoder, feature_names)
    print("\nMODEL COMPARISON\n")

    for name, metrics in results.items():

        print(name)

        print(f"Accuracy : {metrics['accuracy']:.4f}")
        print(f"Precision: {metrics['precision']:.4f}")
        print(f"Recall   : {metrics['recall']:.4f}")
        print(f"F1 Score : {metrics['f1']:.4f}")
        print(f"5-Fold CV Accuracy : {metrics['cv_accuracy']:.4f}")

        print("-" * 40)
        print("Classification Report")

        print(metrics["report"])

        print()

        print("Confusion Matrix")

        print(metrics["confusion_matrix"])

        print("=" * 60)


if __name__ == "__main__":
    main()