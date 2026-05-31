class AnagramChecker:
    """
    A class used to represent an Anagram Checker.
    
    Attributes:
        word_list (set): A collection of valid lowercase words loaded from a file.
    """

    def __init__(self, filename="word_list.txt"):
        """
        Loads the external dictionary text file into a set.
        Using a set ensures O(1) constant time complexity for validity lookups.
        """
        try:
            with open(filename, "r") as file:
                # Read lines, strip whitespace, and normalize to lowercase
                self.word_list = {line.strip().lower() for line in file if line.strip()}
        except FileNotFoundError:
            # Fallback to an empty set to prevent internal crashing if the file is missing
            self.word_list = set()

    def is_valid_word(self, word):
        """
        Validates if the user's word exists in the dictionary.
        
        Returns:
            bool: True if the word is found, False otherwise.
        """
        return word.lower() in self.word_list

    def is_anagram(self, word1, word2):
        """
        Checks if two strings are structural anagrams of each other.
        
        Returns:
            bool: True if character counts match perfectly, False otherwise.
        """
        # Lowercase and clean any potential whitespace strings
        w1_clean = word1.lower().replace(" ", "")
        w2_clean = word2.lower().replace(" ", "")
        
        # Anagrams have identical sorted character configurations
        return sorted(w1_clean) == sorted(w2_clean)

    def get_anagrams(self, word):
        """
        Iterates through the dictionary to collect all anagrams for the target word.
        
        Returns:
            list: A list of structural anagrams found, excluding the word itself.
        """
        word_clean = word.lower()
        anagrams = []
        
        for dict_word in self.word_list:
            # A word cannot be an anagram of itself
            if dict_word != word_clean and self.is_anagram(word_clean, dict_word):
                anagrams.append(dict_word)
                
        return anagrams
