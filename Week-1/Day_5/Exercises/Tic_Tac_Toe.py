board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
]


def display_board(board_to_show):
    """Prints the 3x3 game board."""
    print()  
    for i in range(3):
        print(f" {board_to_show[i][0]} | {board_to_show[i][1]} | {board_to_show[i][2]} ")
        if i < 2:
            print("---+---+---")
    print()

display_board(board)

def player_input(board, player):
    """
    Prompts the current player for a move, validates the input, 
    and updates the board once a valid move is made.
    """
    while True:
        try:
            # Prompt user for row and column numbers (1-3 format for better user experience)
            print(f"Player {player}'s turn.")
            row = int(input("Enter row (1, 2, or 3): ")) - 1
            col = int(input("Enter column (1, 2, or 3): ")) - 1
            
            # Check if the coordinates are within the valid 0-2 index range
            if row not in [0, 1, 2] or col not in [0, 1, 2]:
                print("Invalid input! Please choose numbers between 1 and 3.\n")
                continue
                
            # Check if the chosen cell is empty
            if board[row][col] != ' ':
                print("That spot is already taken! Try again.\n")
                continue
                
            # If all checks pass, place the player's symbol and break the loop
            board[row][col] = player
            break
            
        except ValueError:
            # Handles cases where the user types letters or leaves the input blank
            print("Invalid input! Please enter valid integers.\n")


def check_win(board, player):
    """
    Checks rows, columns, and diagonals to see if the current player won.
    Returns True if won, otherwise False.
    """
    # 1. Check all 3 rows
    for row in board:
        if row[0] == row[1] == row[2] == player:
            return True

    # 2. Check all 3 columns
    for col in range(3):
        if board[0][col] == board[1][col] == board[2][col] == player:
            return True

    # 3. Check the 2 diagonals
    if board[0][0] == board[1][1] == board[2][2] == player:
        return True
    if board[0][2] == board[1][1] == board[2][0] == player:
        return True

    return False

def check_tie(board):
    # Go through every row on the board
    for row in board:
        # Go through every cell in that row
        for cell in row:
            # If we find even one empty space, the game is NOT a tie yet
            if cell == ' ':
                return False
                
    # If the loop finishes and found no empty spaces, the board is full (Tie)
    return True

def play():
    # Initialize a fresh game board
    game_board = [
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "]
    ]
    
    current_player = "X"
    game_running = True
    
    print("Welcome to Tic Tac Toe!")
    
    while game_running:
        # 1. Display the board using your function
        display_board(game_board)
        
        # 2. Get input and update the board using your function
        player_input(game_board, current_player)
        
        # 3. Check for a winner using your function
        if check_win(game_board, current_player):
            display_board(game_board)
            print(f"🎉 Game Over! Player {current_player} wins! 🎉")
            game_running = False
            
        # 4. Check for a tie using your function
        elif check_tie(game_board):
            display_board(game_board)
            print("🤝 Game Over! It's a tie! 🤝")
            game_running = False
            
        # 5. Switch to the next player
        else:
            if current_player == "X":
                current_player = "O"
            else:
                current_player = "X"

# Start the game loop
play()