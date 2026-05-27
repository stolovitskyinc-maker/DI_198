# Instructions:
# 
# Create a Text class to analyze text data, either from a string or a file. Then, create a TextModification class to perform text cleaning.
# 
# 
# 
# Part I: Analyzing a Simple String
# 
# Step 1: Create the Text Class
# 
# Create a class called Text.
# The __init__ method should take a string as an argument and store it in an attribute (e.g: self.text).
# 
# 
# Step 2: Implement word_frequency Method
# 
# Create a method called word_frequency(word).
# Split the text attribute into a list of words.
# Count the occurrences of the given word in the list.
# Return the count.
# If the word is not found, return None or a meaningful message.
# 
# 
# Step 3: Implement most_common_word Method
# 
# Create a method called most_common_word().
# Split the text into a list of words.
# Use a dictionary to store word frequencies.
# Find the word with the highest frequency.
# Return the most common word.
# 
# 
# Step 4: Implement unique_words Method
# 
# Create a method called unique_words().
# Split the text into a list of words.
# Use a set to store unique words.
# Return the unique words as a list.
# 
# 
# Part II: Analyzing Text from a File
# 
# Step 5: Implement from_file Class Method
# 
# Create a class method called from_file(file_path).
# Open the file at file_path in read mode.
# Read the file content.
# Create and return a Text instance with the file content as the text.
# 
# 
# Bonus: Text Modification
# 
# Step 6: Create the TextModification Class
# 
# Create a class called TextModification that inherits from Text.
# 
# 
# Step 7: Implement remove_punctuation Method
# 
# Create a method called remove_punctuation().
# Use the string module to get a string of punctuation characters.
# Use a string method or regular expressions to remove punctuation from the text attribute.
# Return the modified text.
# 
# 
# Step 8: Implement remove_stop_words Method
# 
# Create a method called remove_stop_words().
# Search online for a list of English stop words (common words like “a”, “the”, “is”).
# Split the text into a list of words.
# Filter out stop words from the list.
# Join the remaining words back into a string.
# Return the modified text.
# 
# 
# Step 9: Implement remove_special_characters Method
# 
# Create a method called remove_special_characters().
# Use regular expressions to remove special characters from the text attribute.
# Return the modified text.

import string
import re

class Text:
    # Step 1: Create the Text Class
    def __init__(self, text: str):
        self.text = text

    # Step 2: Implement word_frequency Method
    def word_frequency(self, word: str):
        words = self.text.split()
        count = words.count(word)
        if count == 0:
            return f"The word '{word}' was not found in the text."
        return count

    # Step 3: Implement most_common_word Method
    def most_common_word(self):
        words = self.text.split()
        if not words:
            return None
            
        frequencies = {}
        for w in words:
            frequencies[w] = frequencies.get(w, 0) + 1
            
        # Find the key with the highest value
        most_common = max(frequencies, key=frequencies.get)
        return most_common

    # Step 4: Implement unique_words Method
    def unique_words(self):
        words = self.text.split()
        unique_set = set(words)
        return list(unique_set)

    # Step 5: Implement from_file Class Method
    @classmethod
    def from_file(cls, file_path: str):
        with open(file_path, "r", encoding="utf-8") as file:
            content = file.read()
        return cls(content)


# Step 6: Create the TextModification Class
class TextModification(Text):
    
    # Step 7: Implement remove_punctuation Method
    def remove_punctuation(self):
        # Create a translation table that maps all punctuation to None
        translator = str.maketrans("", "", string.punctuation)
        self.text = self.text.translate(translator)
        return self.text

    # Step 8: Implement remove_stop_words Method
    def remove_stop_words(self):
        # A standard list of English stop words
        stop_words = {
            "a", "about", "above", "after", "again", "against", "all", "am", "an", 
            "and", "any", "are", "aren't", "as", "at", "be", "because", "been", 
            "before", "being", "below", "between", "both", "but", "by", "can't", 
            "cannot", "could", "couldn't", "did", "didn't", "do", "does", "doesn't", 
            "doing", "don't", "down", "during", "each", "few", "for", "from", 
            "further", "had", "hadn't", "has", "hasn't", "have", "haven't", "having", 
            "he", "he'd", "hell", "hes", "her", "here", "heres", "hers", "herself", 
            "him", "himself", "his", "how", "hows", "i", "id", "ill", "im", "ive", 
            "if", "in", "into", "is", "isn't", "it", "it's", "its", "itself", "lets", 
            "me", "more", "most", "mustn't", "my", "myself", "no", "nor", "not", "of", 
            "off", "on", "once", "only", "or", "other", "ought", "our", "ours", 
            "ourselves", "out", "over", "own", "same", "shan't", "she", "she'd", 
            "shell", "shes", "should", "shouldn't", "so", "some", "such", "than", 
            "that", "that's", "the", "their", "theirs", "them", "themselves", 
            "then", "there", "there's", "these", "they", "they'd", "they'll", 
            "they're", "they've", "this", "those", "through", "to", "too", "under", 
            "until", "up", "very", "was", "wasn't", "we", "we'd", "we'll", "we're", 
            "we've", "were", "weren't", "what", "what's", "when", "when's", "where", 
            "where's", "which", "while", "who", "who's", "whom", "why", "why's", 
            "with", "won't", "would", "wouldn't", "you", "you'd", "you'll", "you're", 
            "you've", "your", "yours", "yourself", "yourselves"
        }
        
        words = self.text.split()
        # Keep word only if its lowercase version is not a stop word
        filtered_words = [w for w in words if w.lower() not in stop_words]
        self.text = " ".join(filtered_words)
        return self.text

    # Step 9: Implement remove_special_characters Method
    def remove_special_characters(self):
        # Keeps only alphanumeric characters (a-z, A-Z, 0-9) and spaces
        self.text = re.sub(r'[^a-zA-Z0-9\s]', '', self.text)
        return self.text

# --- Example Verification Code ---
if __name__ == "__main__":
    sample_phrase = "Hello world! This is a simple test, isn't it? Hello world again."
    
    print("--- Testing Part I (Text Analyzer) ---")
    analyzer = Text(sample_phrase)
    print(f"Frequency of 'Hello': {analyzer.word_frequency('Hello')}")
    print(f"Most common word: {analyzer.most_common_word()}")
    print(f"Unique words: {analyzer.unique_words()}")
    
    print("\n--- Testing Bonus (Text Modification) ---")
    modifier = TextModification(sample_phrase)
    print(f"Original Text: {modifier.text}")
    print(f"Removed Punctuation: {modifier.remove_punctuation()}")
    print(f"Removed Stop Words: {modifier.remove_stop_words()}")
