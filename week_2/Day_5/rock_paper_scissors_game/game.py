import random

class Game:
    def __init__(self):
        """Initializes the valid choices for the game."""
        self.valid_choices = ["rock", "paper", "scissors"]

    def get_user_item(self):
        """Prompts the user to select an item and validates the input."""
        while True:
            user_choice = input("Select an item (rock/paper/scissors): ").strip().lower()
            if user_choice in self.valid_choices:
                return user_choice
            print("Invalid input. Please enter 'rock', 'paper', or 'scissors'.")

    def get_computer_item(self):
        """Randomly selects and returns an item for the computer."""
        return random.choice(self.valid_choices)

    def get_game_result(self, user_item, computer_item):
        """Determines the game result based on standard Rock Paper Scissors rules."""
        if user_item == computer_item:
            return "draw"
            
        # Win conditions for the user
        win_conditions = {
            "rock": "scissors",
            "paper": "rock",
            "scissors": "paper"
        }
        
        if win_conditions[user_item] == computer_item:
            return "win"
        else:
            return "loss"

    def play(self):
        """Executes a full round of the game and returns the outcome."""
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)
        
        # Display the clear outcome to the user
        print(f"\nYou chose: {user_item.capitalize()}")
        print(f"Computer chose: {computer_item.capitalize()}")
        print(f"Result: You got a {result.upper()}!")
        
        return result