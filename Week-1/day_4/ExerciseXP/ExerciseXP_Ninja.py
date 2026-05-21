# ==============================================================================
# Exercise 1 : What’s your name ?
# Instructions
# Write a function called get_full_name() that takes three arguments: 1: first_name, 2: middle_name 3: last_name.
# middle_name should be optional, if it’s omitted by the user, the name returned should only contain the first and the last name.
# For example, get_full_name(first_name="john", middle_name="hooker", last_name="lee") will return John Hooker Lee.
# But get_full_name(first_name="bruce", last_name="lee") will return Bruce Lee.
# ==============================================================================

def get_full_name(first_name, last_name, middle_name=""):
    # Check if a middle name was provided
    if middle_name:
        full_name = f"{first_name} {middle_name} {last_name}"
    else:
        full_name = f"{first_name} {last_name}"
        
    # Use .title() to capitalize the first letter of each name properly
    return full_name.title()


# --- Demonstration running code for Exercise 1 ---
print("--- Exercise 1: Full Name Formatter ---")
print(get_full_name(first_name="john", middle_name="hooker", last_name="lee"))
print(get_full_name(first_name="bruce", last_name="lee"))
print("-" * 40)


# ==============================================================================
# Exercise 2 : From English to Morse
# Instructions
# Write a function that converts English text to morse code and another one that does the opposite.
# Hint: Check the internet for a translation table, every letter is separated with a space and every word is separated with a slash /.
# ==============================================================================

MORSE_DICT = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 
    'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 
    'Y': '-.--', 'Z': '--..', '1': '.----', '2': '..---', '3': '...--', 
    '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', 
    '9': '----.', '0': '-----'
}

# Create an inverted dictionary to translate from Morse back to English
ENGLISH_DICT = {value: key for key, value in MORSE_DICT.items()}

def english_to_morse(text):
    morse_words = []
    # Split text into separate words to manage slashes correctly
    words = text.upper().split(" ")
    
    for word in words:
        morse_letters = []
        for char in word:
            if char in MORSE_DICT:
                morse_letters.append(MORSE_DICT[char])
        # Join letters with a space
        morse_words.append(" ".join(morse_letters))
        
    # Join distinct words with a slash
    return " / ".join(morse_words)


def morse_to_english(morse_code):
    english_words = []
    # Split the incoming string by words using the slash indicator
    words = morse_code.split("/")
    
    for word in words:
        english_letters = []
        # Split letters by spaces
        letters = word.strip().split(" ")
        for letter in letters:
            if letter in ENGLISH_DICT:
                english_letters.append(ENGLISH_DICT[letter])
        english_words.append("".join(english_letters))
        
    return " ".join(english_words)


# --- Demonstration running code for Exercise 2 ---
print("\n--- Exercise 2: Morse Translator ---")
sample_text = "Hello World"
morse_result = english_to_morse(sample_text)
print(f"English -> Morse: '{sample_text}' becomes '{morse_result}'")

english_back = morse_to_english(morse_result)
print(f"Morse -> English: '{morse_result}' becomes '{english_back}'")
print("-" * 40)


# ==============================================================================
# Exercise 3 : Box of stars
# Instructions
# Write a function named box_printer that takes any amount of strings (not in a list) and prints them, one per line, in a rectangular frame.
# For example calling box_printer("Hello", "World", "in", "reallylongword", "a", "frame") will result as:
# ******************
# * Hello          *
# * World          *
# * in             *
# * reallylongword *
# * a              *
# * frame          *
# ******************
# ==============================================================================

def box_printer(*strings):
    if not strings:
        return
        
    # Find the longest word length to calculate the box width dynamically
    max_len = max(len(s) for s in strings)
    
    # Calculate the total width including borders and inner spacing (* plus space on each side)
    box_width = max_len + 4
    
    # Print top border line
    print("*" * box_width)
    
    # Print each word padded with trailing spaces to maintain the box rectangle
    for s in strings:
        print(f"* {s.ljust(max_len)} *")
        
    # Print bottom border line
    print("*" * box_width)


# --- Demonstration running code for Exercise 3 ---
print("\n--- Exercise 3: Box of Stars ---")
box_printer("Hello", "World", "in", "reallylongword", "a", "frame")
print("-" * 40)


# ==============================================================================
# Exercise 4 : What is the purpose of this code?
# Analyse this code before executing it. What is the purpose of this code?
# 
# def insertion_sort(alist):
#    for index in range(1,len(alist)):
# 
#      currentvalue = alist[index]
#      position = index
# 
#      while position>0 and alist[position-1]>currentvalue:
#          alist[position]=alist[position-1]
#          position = position-1
# 
#      alist[position]=currentvalue
# 
# alist = [54,26,93,17,77,31,44,55,20]
# insertion_sort(alist)
# print(alist)
# ==============================================================================

# --- Analysis Explanation ---
# Purpose: The purpose of this code is to implement the "Insertion Sort" algorithm. 
# It takes an unsorted list of items and rearranges them into ascending order (smallest to largest).
# How it works: It shifts elements out of the way one by one to find the correct placeholder index 
# for the 'currentvalue', acting much like sorting a hand of playing cards.

print("\n--- Exercise 4: Insertion Sort Output ---")
def insertion_sort(alist):
   for index in range(1,len(alist)):

     currentvalue = alist[index]
     position = index

     while position>0 and alist[position-1]>currentvalue:
         alist[position]=alist[position-1]
         position = position-1

     alist[position]=currentvalue

alist = [54,26,93,17,77,31,44,55,20]
insertion_sort(alist)
print(f"Sorted List Output: {alist}")
print("-" * 40)
