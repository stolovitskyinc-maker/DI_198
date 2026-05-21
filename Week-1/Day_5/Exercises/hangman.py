import random

wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit card', 'rush', 'south']
word = random.choice(wordslist) 

### YOUR CODE STARTS FROM HERE ###

# --- Visual Gallows Stages (0 to 6 incorrect guesses) ---
GALLOWS_STAGES = [
    """
    +---+

    |   |
        |

        |
        |
        |
    =========
    """,
    """
    +---+

    |   |
    O   |

        |
        |
        |
    =========
    """,
    """
    +---+

    |   |
    O   |

    |   |
        |

        |
    =========
    """,
    """
    +---+
    |   |
    O   |
   /|   |

        |
        |
    =========
    """,
    """
    +---+

    |   |
    O   |
   /|\  |

        |
        |
    =========
    """,
    """
    +---+

    |   |
    O   |
   /|\  |
   /    |

        |
    =========
    """,
    """
    +---+
    |   |
    O   |
   /|\  |
   / \  |
        |
    =========
    """
]

# --- Game Initialization ---
incorrect_guesses = 0
guessed_letters = set()

# Initialize the hidden board with stars for letters, but keep spaces as spaces
hidden_word = []
for char in word:
    if char == " ":
        hidden_word.append(" ")
    else:
        hidden_word.append("_")

print("Welcome to Hangman!")

# --- Main Game Loop ---
while incorrect_guesses < 6 and "_" in hidden_word:
    # 1. Display current state of the game
    print(GALLOWS_STAGES[incorrect_guesses])
    print("Word to guess: " + "".join(hidden_word))
    print(f"Guessed letters: {', '.join(sorted(guessed_letters)) if guessed_letters else 'None'}")
    
    # 2. Get and validate player input
    guess = input("Guess a letter: ").lower().strip()
    
    if len(guess) != 1 or not guess.isalpha():
        print("\n Invalid input! Please enter exactly one letter.")
        continue
        
    if guess in guessed_letters:
        print(f"\n You already guessed '{guess}'! Try a different letter.")
        continue
        
    # Add the valid guess to our history track
    guessed_letters.add(guess)
    
    # 3. Check if the guess is in the secret word
    if guess in word:
        print(f"\n Good job! '{guess}' is in the word.")
        # Reveal the letter in all correct positions
        for index, letter in enumerate(word):
            if letter == guess:
                hidden_word[index] = guess
    else:
        print(f"\n Incorrect! '{guess}' is not in the word.")
        incorrect_guesses += 1

# --- End Game Results ---
print(GALLOWS_STAGES[incorrect_guesses])

if "_" not in hidden_word:
    print(f"🎉 Congratulations! You guessed the word: '{word}'! 🎉")
else:
    print(f"💀 Game Over! You ran out of body parts. The secret word was: '{word}'.")
