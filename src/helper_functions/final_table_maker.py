import pandas as pd

def final_table_maker(df, num_players, name):
    
    """
    Finds the top $num_players in df, and assigns them a random seat
    df needs to have columns ["Names", "Total"]
    """
    
    df.sort_values(by="Total", inplace=True, ascending=False)
    
    df = df.iloc[:num_players]
    df = df.sample(frac=1).reset_index(drop=True)
    df.index += 1
    df.index.name= "Seat No."

    df = df.rename({'Total': 'Winnings'}, axis=1) 
    
    df[["Full Name", "Winnings"]].to_csv(name + "-finals-seating.csv")
    

final_table_maker(pd.read_excel("Beginner.xlsx", header=0), 8, "Beginner")
final_table_maker(pd.read_excel("Advanced.xlsx", header=0), 8, "Advanced")