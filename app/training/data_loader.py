import pandas as pd


def load_dataset(path: str):
    """
    Load the vehicle sensor dataset.
    """

    df = pd.read_csv(path)

    return df