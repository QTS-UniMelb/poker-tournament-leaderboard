import pandas as pd

# Disbales SettingWithCopyWarning warnings. Working with pandas 1.5.2, may possibly not work in future versions
pd.options.mode.chained_assignment = None

STARTING_AMOUNT = 30000
BEST_X_SCORES = 4
FIRST_ROUND_COLUMN = 5

def format(df, divisions, rounds):
    
    """
    Formats leaderboard to make it displayable on poker.qtsunimelb.com
    df needs to have columns ["Timestamp", "Full Name", "Which stream are you playing in today? ", 
    "Student_Number", "Email ", "Round 1", ..., "Round n", "Total"]
    """
    
    for div in divisions:
        
        curr_df = df.loc[df['Which stream are you playing in today? '] == div]
        
        # change empty values to -STARTING_AMOUNT
        for i in range(rounds):
            curr_df[curr_df.columns[i + FIRST_ROUND_COLUMN]] = curr_df.loc[:, curr_df.columns[i + FIRST_ROUND_COLUMN]].fillna(0).astype(int) - STARTING_AMOUNT
        
        # find and sort by total ammount
        find_total(curr_df, rounds)    
        curr_df.sort_values(by=["Total", "Full Name"], inplace=True, ascending=[False, True])
        
        # select required columns, and reset index to match the sorted order
        columns = ["Full Name"] + ["Round " + str(i + 1) for i in range(rounds)] + ["Total"]
        curr_df =  curr_df.reset_index(level=0,names='#')[columns] 
        curr_df.index += 1  # start index at 1, not 0 
        curr_df.index.name= "#"
        
        # capitalise first letters of each name
        curr_df["Full Name"]  = curr_df["Full Name"].apply(str.title)  
        
        curr_df.to_excel(div + ".xlsx")  
        
    return 0


def find_total(df, rounds):
    df['Total'] = df.iloc[:, list(range(FIRST_ROUND_COLUMN, FIRST_ROUND_COLUMN + rounds))].sum(axis=1)    
        
    if rounds > BEST_X_SCORES:
        for i in range(df.shape[0]):
            scores = sorted(df.iloc[i, list(range(4, 4 + rounds))], reverse=True)
            total = sum(scores[:BEST_X_SCORES])
            
            for j in range(BEST_X_SCORES, rounds):
                if scores[j] < -STARTING_AMOUNT:
                    total = total + scores[j] + STARTING_AMOUNT
                
            df.iloc[i, -1] = total
        

if __name__ == "__main__":
    
    file_path = "Poker Tournament S2Y23 - Leaderboard - Form responses 1.csv"
    divisions = ["Beginner", "Advanced"]
    rounds_completed = 1
    assert(format(pd.read_csv(file_path, header=0), divisions, rounds_completed) == 0)
