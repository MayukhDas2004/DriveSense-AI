import pandas as pd


def load_dataset(dataset_path):

    df = pd.read_csv(dataset_path)

    return df