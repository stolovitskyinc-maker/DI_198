# ==============================================================================
# Challenge 1: Sorting
# Instructions:
# Write a Python program that takes a single string of words as input, where 
# the words are separated by commas (e.g., ‘apple,banana,cherry’). The program 
# should output these words sorted in alphabetical order, with the sorted words 
# also separated by commas.
# 
# Step 1: Get Input
# Use the input() function to get a string of words from the user.
# The words will be separated by commas.
# 
# Step 2: Split the String
# 
# Step 3: Sort the List
# 
# Step 4: Join the Sorted List
# 
# Step 5: Print the Result
# Print the resulting comma-separated string.
# 
# Expected Output:
# If the input is without,hello,bag,world, the output should be bag,hello,without,world.
# ==============================================================================

print("--- Challenge 1: Sorting ---")

# Step 1: Get Input
user_input = input("Enter a string of words separated by commas: ")

# Step 2: Split the String
# This splits the string at each comma and creates a list of words.
words_list = user_input.split(",")

# Step 3: Sort the List
# This sorts the items in the list alphabetically.
words_list.sort()

# Step 4: Join the Sorted List
# This combines the list back into a single string separated by commas.
sorted_string = ",".join(words_list)

# Step 5: Print the Result
print(sorted_string)

print("-" * 40)


# ==============================================================================
# Challenge 2: Longest Word
# Instructions:
# Write a function that takes a sentence as input and returns the longest word 
# in the sentence. If there are multiple longest words, return the first one 
# encountered. Characters like apostrophes, commas, and periods should be 
# considered part of the word.
# 
# Step 1: Define the Function
# Define a function that takes a string (the sentence) as a parameter.
# 
# Step 2: Split the Sentence into Words
# 
# Step 3: Initialize Variables
# 
# Step 4: Iterate Through the Words
# 
# Step 5: Compare Word Lengths
# 
# Step 6: Return the Longest Word
# 
# Expected Output:
# longest_word("Margaret's toy is a pretty doll.") should return "Margaret's".
# longest_word("A thing of beauty is a joy forever.") should return "forever.".
# longest_word("Forgetfulness is by all means powerless!") should return "Forgetfulness".
# ==============================================================================

print("\n--- Challenge 2: Longest Word ---")

# Step 1: Define the Function
def longest_word(sentence):
    # Step 2: Split the Sentence into Words
    # By default, split() separates the string by any whitespace.
    words = sentence.split()
    
    # Step 3: Initialize Variables
    # We create an empty string to store the longest word found so far.
    current_longest = ""
    
    # Step 4: Iterate Through the Words
    for word in words:
        # Step 5: Compare Word Lengths
        # Using '>' instead of '>=' ensures that if there is a tie, 
        # the first word encountered is kept.
        if len(word) > len(current_longest):
            current_longest = word
            
    # Step 6: Return the Longest Word
    return current_longest


# --- Running Tests for Challenge 2 ---
test1 = "Margaret's toy is a pretty doll."
test2 = "A thing of beauty is a joy forever."
test3 = "Forgetfulness is by all means powerless!"

print(f"longest_word('{test1}') -> '{longest_word(test1)}'")
print(f"longest_word('{test2}') -> '{longest_word(test2)}'")
print(f"longest_word('{test3}') -> '{longest_word(test3)}'")

print("-" * 40)
