class AnagramChecker:
    def __init__(self, filename="word_list.txt"):
        """Loads the word list file into a set in lowercase."""
        try:
            with open(filename, "file_reading") as file:
                # Using a set provides O(1) fast lookup time for validity checks
                self.word_list = {line.strip().lower() for line in file if line.strip()}
        except FileNotFoundError:
            print(f"Error: The file '{filename}' was not found.")
            self.word_list = set()

    def is_valid_word(self, word):
        """Checks if the given word exists in the loaded word list."""
        return word.lower() in self.word_list

    def is_anagram(self, word1, word2):
        """Checks if two words are anagrams by comparing their sorted characters."""
        w1_clean = word1.lower().replace(" ", "")
        w2_clean = word2.lower().replace(" ", "")
        return sorted(w1_clean) == sorted(w2_clean)

    def get_anagrams(self, word):
        """Finds all valid anagrams for a given word from the word list."""
        word_clean = word.lower()
        anagrams = []
        
        for dict_word in self.word_list:
            if dict_word != word_clean and self.is_anagram(word_clean, dict_word):
                anagrams.append(dict_word)
                
        return anagrams
