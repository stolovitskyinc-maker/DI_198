# Instructions:
# 
# Download the provided word list and save it in your development directory.
# Create a function to read the words from the file.
# Create a function to generate a random sentence of a given length.
# Create a main function to handle user input and program flow.
# 
# 
# Step 1: Create the get_words_from_file function
# 
# Create a function named get_words_from_file that takes the file path as an argument.
# Open the file in read mode ("r").
# Read the file content.
# Split the content into a list of words.
# Return the list of words.
# 
# 
# Step 2: Create the get_random_sentence function
# 
# Create a function named get_random_sentence that takes the sentence length as an argument.
# Call get_words_from_file to get the list of words.
# Select a random word from the list length times.
# Create a sentence with the selected words.
# Convert the sentence to lowercase.
# Return the sentence.
# 
# 
# Step 3: Create the main function
# 
# Create a function named main.
# Print a message explaining the program’s purpose.
# Ask the user for the desired sentence length.
# Validate the user input:
# Check if it is an integer.
# Check if it is between 2 and 20 (inclusive).
# If the input is invalid, print an error message and exit.
# If the input is valid, call get_random_sentence with the length and print the generated sentence.

import random
import sys

# Step 1: Create the get_words_from_file function
def get_words_from_file(file_path):
    with open(file_path, "r") as file:
        content = file.read()
        # split() automatically handles newlines and spaces to separate words
        words = content.split()
    return words

# Step 2: Create the get_random_sentence function
def get_random_sentence(length):
    # Reusing our text file from the previous conversation as our word list
    file_path = "nameslist.txt" 
    word_list = get_words_from_file(file_path)
    
    # Select a random word from the list 'length' times
    selected_words = random.choices(word_list, k=length)
    
    # Create a sentence with space separation and lowercase it
    sentence = " ".join(selected_words).lower()
    return sentence

# Step 3: Create the main function
def main():
    print("--- Welcome to the Random Sentence Generator ---")
    print("This program generates a random lowercase sentence from a local text file.")
    
    user_input = input("Enter the desired sentence length (between 2 and 20): ")
    
    # Validate if it is an integer
    if not user_input.isdigit():
        print("Error: Input must be a valid positive integer.")
        sys.exit()
        
    length = int(user_input)
    
    # Validate if it is between 2 and 20 inclusive
    if length < 2 or length > 20:
        print("Error: The length must be between 2 and 20 (inclusive).")
        sys.exit()
        
    # Generate and print the sentence if valid
    generated_sentence = get_random_sentence(length)
    print(f"\nGenerated Sentence:\n{generated_sentence}")

if __name__ == "__main__":
    main()

# 🌟 Exercise 2: Working with JSON
# Goal: Access a nested key in a JSON string, add a new key, and save the modified JSON to a file.
# 
# 
# 
# Key Python Topics:
# 
# JSON parsing (json.loads())
# JSON serialization (json.dump())
# Dictionaries
# File handling (open())
# 
# 
# Instructions:
# 
# Using the follow code:
# 
# import json
# sampleJson = """{ 
#    "company":{ 
#       "employee":{ 
#          "name":"emma",
#          "payable":{ 
#             "salary":7000,
#             "bonus":800
#          }
#       }
#    }
# }"""
# 
# 
# Access the nested “salary” key.
# Add a new key “birth_date” wich value is of format “YYYY-MM-DD”, to the “employee” dictionary: "birth_date": "YYYY-MM-DD".
# Save the modified JSON to a file.
# 
# 
# Step 1: Load the JSON string
# 
# Import the json module.
# Use json.loads() to parse the JSON string into a Python dictionary.
# 
# 
# Step 2: Access the nested “salary” key
# 
# Access the “salary” key using nested dictionary access (e.g., data["company"]["employee"]["payable"]["salary"]).
# Print the value of the “salary” key.
# 
# 
# Step 3: Add the “birth_date” key
# 
# Add a new key-value pair to the “employee” dictionary: "birth_date": "YYYY-MM-DD".
# Replace "YYYY-MM-DD" with an actual date.
# 
# 
# Step 4: Save the JSON to a file
# 
# Open a file in write mode ("w").
# Use json.dump() to write the modified dictionary to the file in JSON format.
# Use the indent parameter to make the JSON file more readable.

import json

sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

# Step 1: Load the JSON string
data = json.loads(sampleJson)

# Step 2: Access the nested “salary” key
salary_value = data["company"]["employee"]["payable"]["salary"]
print(f"The employee's salary is: {salary_value}")

# Step 3: Add the “birth_date” key
data["company"]["employee"]["birth_date"] = "1995-04-12"

# Step 4: Save the JSON to a file
output_filename = "modified_employee.json"
with open(output_filename, "w") as file:
    json.dump(data, file, indent=4)

print(f"Successfully saved the updated JSON configuration to '{output_filename}'.")
