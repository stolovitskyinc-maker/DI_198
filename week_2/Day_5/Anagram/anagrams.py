from anagram_checker import AnagramChecker

def main():
    # Instantiate the logic class
    checker = AnagramChecker()

    while True:
        print("\n--- ANAGRAM CHECKER MENU ---")
        print("1. Input a word")
        print("2. Exit")
        
        choice = input("Choose an option (1-2): ").strip()
        
        if choice == "2":
            print("Goodbye!")
            break
            
        elif choice == "1":
            user_input = input("Enter a word: ").strip()
            
            # Validation 1: Check if empty
            if not user_input:
                print("Error: Input cannot be empty.")
                continue
                
            # Validation 2: Ensure it is a single word (no inner whitespace spaces)
            if len(user_input.split()) > 1:
                print("Error: Only a single word is allowed.")
                continue
                
            # Validation 3: Only alphabetic letters allowed
            if not user_input.isalpha():
                print("Error: Only alphabetic characters are allowed. No numbers/symbols.")
                continue
            
            # Logic Processing
            if checker.is_valid_word(user_input):
                print(f"\nYOUR WORD :\"{user_input.upper()}\"")
                print("this is a valid English word.")
                
                # Fetch and display structural anagrams
                anagrams = checker.get_anagrams(user_input)
                if anagrams:
                    print(f"Anagrams for your word: {', '.join(anagrams)}.")
                else:
                    print("No anagrams found for your word.")
            else:
                print(f"\nYOUR WORD :\"{user_input.upper()}\"")
                print("This is NOT a valid English word in our dictionary.")
                
        else:
            print("Invalid selection. Please choose 1 or 2.")

if __name__ == "__main__":
    main()
from anagram_checker import AnagramChecker

def main():
    """
    Drives the command-line user interface for the Anagram Checker application.
    Manages the menu loop, enforces strict validation checks, and formats results.
    """
    # Instantiate the logic engine class (assumes 'word_list.txt' is in the same directory)
    checker = AnagramChecker()

    # Infinite loop to keep showing the menu until an explicit exit choice is chosen
    while True:
        print("\n--- ANAGRAM CHECKER MENU ---")
        print("1. Input a word")
        print("2. Exit")
        
        choice = input("Choose an option (1-2): ").strip()
        
        if choice == "2":
            print("Goodbye!")
            break
            
        elif choice == "1":
            raw_input = input("Enter a word: ").strip()
            
            # CRITICAL VALIDATION 1: Check for empty input strings
            if not raw_input:
                print("Error: Input cannot be blank.")
                continue
                
            # CRITICAL VALIDATION 2: Check for multi-word phrases (e.g., 'hello world')
            # splitting by whitespace allows us to catch exact word counts immediately
            if len(raw_input.split()) > 1:
                print("Error: Multiple words detected. Please enter only a single word.")
                continue
                
            # CRITICAL VALIDATION 3: Check for numbers or special symbols
            if not raw_input.isalpha():
                print("Error: Your word must only contain alphabetic characters (no numbers or symbols).")
                continue
            
            # Dictionary Membership Verification Lookups
            if checker.is_valid_word(raw_input):
                print(f"\nYOUR WORD :\"{raw_input.upper()}\"")
                print("this is a valid English word.")
                
                # Retrieve and format matching structural anagrams
                anagrams = checker.get_anagrams(raw_input)
                if anagrams:
                    print(f"Anagrams for your word: {', '.join(anagrams)}.")
                else:
                    print("No anagrams found for your word.")
            else:
                print(f"\nYOUR WORD :\"{raw_input.upper()}\"")
                print("This is NOT a valid English word in our dictionary file.")
                
        else:
            print("Invalid selection. Please choose options 1 or 2.")

# Standard entry point safeguarding block execution architecture
if __name__ == "__main__":
    main()
