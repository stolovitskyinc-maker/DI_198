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
