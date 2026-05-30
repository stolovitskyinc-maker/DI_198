from game import Game

def get_user_menu_choice():
    """Displays the main menu, validates input, and returns the choice."""
    while True:
        print("\n--- Rock Paper Scissors Menu ---")
        print("1. Play a new game")
        print("2. Show scores")
        print("3. Quit")
        
        choice = input("Select an option (1-3): ").strip()
        if choice in ["1", "2", "3"]:
            return choice
        print("Invalid choice. Please type 1, 2, or 3.")

def print_results(results):
    """Prints the final summary scoreboard and thanks the user."""
    print("\n=======================")
    print("     FINAL SCORES      ")
    print("=======================")
    print(f"Wins:   {results['win']}")
    print(f"Losses: {results['loss']}")
    print(f"Draws:  {results['draw']}")
    print("=======================")
    print("Thank you for playing!")

def main():
    """Manages the main program flow and score keeping loop."""
    # Initialize the scoreboard tracking dictionary
    results = {"win": 0, "loss": 0, "draw": 0}
    
    while True:
        choice = get_user_menu_choice()
        
        if choice == "1":
            # Play a new game round
            game_instance = Game()
            game_outcome = game_instance.play()
            results[game_outcome] += 1
            
        elif choice == "2":
            # Display current scores without exiting
            print("\n--- Current Scoreboard ---")
            print(f"Wins: {results['win']} | Losses: {results['loss']} | Draws: {results['draw']}")
            
        elif choice == "3":
            # Show summary score and exit
            print_results(results)
            break

if __name__ == "__main__":
    main()