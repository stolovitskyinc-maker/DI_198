from anagram_checker import AnagramChecker

def main():
    # Initialize the checker (looks for 'word_list.txt' by default)
    checker = AnagramChecker()
    
    # Check if the dictionary loaded successfully before starting
    if not checker.word_list:
        print("Please ensure your word list file exists and try again.")
        return

    print("--- Welcome to the Anagram Finder ---")
    
    while True:
        print("\nMenu:")
        print("1. Find anagrams for a word")
        print("2. Exit")
        
        choice = input("Select an option (1-2): ").strip()
        
        if choice == "2":
            print("Goodbye!")
            break
        elif choice == "1":
            user_word = input("Enter a single word: ").strip()
            
            # Input validation for single words containing only alphabets
            if not user_word.isalpha():
                print("Error: Please enter a single word containing only letters.")
                continue
                
            # Check validity against dictionary
            if not checker.is_valid_word(user_word):
                print(f"'{user_word}' is not a valid English word in our dictionary.")
                continue
                
            print(f"\nWord entered: '{user_word}'")
            print("Status: Valid word")
            
            # Find and display anagrams
            anagrams = checker.get_anagrams(user_word)
            if anagrams:
                print(f"Anagrams found: {', '.join(anagrams)}")
            else:
                print("No anagrams found for this word.")
        else:
            print("Invalid choice. Please enter 1 or 2.")

if __name__ == "__main__":
    main()
