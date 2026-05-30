class AnagramChecker:
    def __init__(self, filename="word_list.txt"):
        """Loads the word list file into a set in lowercase for speed."""
        try:
            with open(filename, "r") as file:
                # set comprehension for O(1) membership validation lookup time
                self.word_list = {line.strip().lower() for line in file if line.strip()}
        except FileNotFoundError:
            # Fallback to empty set so code doesn't crash internally
            self.word_list = set()

    def is_valid_word(self, word):
        """Checks if the given word exists in the loaded word list."""
        return word.lower() in self.word_list

    def is_anagram(self, word1, word2):
        """Compares two words and returns True if they are structural anagrams."""
        w1_clean = word1.lower().replace(" ", "")
        w2_clean = word2.lower().replace(" ", "")
        
        # Anagrams must have identical sorted characters
        return sorted(w1_clean) == sorted(w2_clean)

    def get_anagrams(self, word):
        """Finds all valid anagrams for the given word from the word list."""
        word_clean = word.lower()
        anagrams = []
        
        for dict_word in self.word_list:
            # Must be an anagram but cannot be the exact same word
            if dict_word != word_clean and self.is_anagram(word_clean, dict_word):
                anagrams.append(dict_word)
                
        return anagrams
