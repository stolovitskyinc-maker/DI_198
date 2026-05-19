# 1. Write code that concatenates two lists together without using the + sign.
list1 = [1, 2, 3]
list2 = [4, 5, 6]

for item in list2:
    list1.append(item)

print(list1)

# 2. Create a loop that goes from 1500 to 2500 and prints all multiples of 5 and 7.
for number in range(1500, 2501):
    if number % 5 == 0 and number % 7 == 0:
        print(number)

# 3. Using this variable
# names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
# Ask a user for their name, if their name is in the names list print out the index of the first occurence of the name.
names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
user_name = input("Please enter your name: ").strip()

if user_name in names:
    first_index = names.index(user_name)
    print(f"Your name is in the list! The first occurrence is at index {first_index}.")
else:
    print("Your name is not in the list.")

# 4. Ask the user for 3 numbers and print the greatest number.
# Test Data
# Input the 1st number: 25
# Input the 2nd number: 78
# Input the 3rd number: 87
# The greatest number is: 87
num1 = float(input("Input the 1st number: "))
num2 = float(input("Input the 2nd number: "))
num3 = float(input("Input the 3rd number: "))
greatest_number = max(num1, num2, num3)
if greatest_number.is_integer():
    greatest_number = int(greatest_number)
print(f"\nThe greatest number is: {greatest_number}")

# 5.Create a string of all the letters in the alphabet
# Loop over each letter and print a message that contains the letter and whether its a vowel or a consonant.
alphabet = "abcdefghijklmnopqrstuvwxyz"

vowels = {"a", "e", "i", "o", "u"}

for letter in alphabet:
    if letter in vowels:
        print(f"The letter '{letter}' is a vowel.")
    else:
        print(f"The letter '{letter}' is a consonant.")

# 6. Ask a user for 7 words, store them in a list named words.
# Ask the user for a single character, store it in a variable called letter.
# Loop through the words list and print the index of the first appearence of the letter variable in each word of the list.
# If the letter doesn’t exist in one of the words, print a friendly message with the word and the letter.
words = []

print("Please enter 7 words:")
for i in range(1, 8):
    word = input(f"Word {i}: ").strip()
    words.append(word)

letter = input("\nEnter a single letter to search for: ").strip()

print("\n--- Search Results ---")

for word in words:
    index = word.find(letter)
    
    if index != -1:
        print(f"In '{word}', the first appearance of '{letter}' is at index {index}.")
    else:
        print(f"Oops! The word '{word}' does not contain the letter '{letter}'.")

# 7. Create a list of numbers from one to one million and then use min() and max() to make sure your list actually starts at one and ends at one million. Use the sum() function to see how quickly Python can add a million numbers.
import time

numbers = list(range(1, 1000001))

print(f"Minimum number: {min(numbers)}")
print(f"Maximum number: {max(numbers)}")

start_time = time.time()
total_sum = sum(numbers)
end_time = time.time()

execution_time = (end_time - start_time) * 1000

print(f"Total sum: {total_sum}")
print(f"Time taken to calculate sum: {execution_time:.2f} milliseconds")

# 8. Write a program which accepts a sequence of comma-separated numbers. Generate a list and a tuple which contain every number.

# Suppose the following input is supplied to the program: 34,67,55,33,12,98

# Then, the output should be:

# ['34', '67', '55', '33', '12', '98']
# ('34', '67', '55', '33', '12', '98')
user_input = input("Enter comma-separated numbers: ")

numbers_list = user_input.split(",")

numbers_tuple = tuple(numbers_list)

print(numbers_list)
print(numbers_tuple)

# 9.Ask the user to input a number from 1 to 9 (including).
# Get a random number between 1 and 9. Hint: random module.
# If the user guesses the correct number print a message that says Winner.
# If the user guesses the wrong number print a message that says better luck next time.
# Bonus: use a loop that allows the user to keep guessing until they want to quit.
# Bonus 2: on exiting the loop tally up and display total games won and lost.
import random

wins = 0
losses = 0

print("Welcome to the Number Guessing Game!")
print("Type 'quit' at any time to exit.\n")

while True:
    user_input = input("Guess a number from 1 to 9: ").strip().lower()

    if user_input == 'quit':
        break

    if not user_input.isdigit() or not (1 <= int(user_input) <= 9):
        print("Invalid input. Please enter a whole number from 1 to 9.")
        continue
        
    user_guess = int(user_input)

    secret_number = random.randint(1, 9)

    if user_guess == secret_number:
        print(f"Winner! The number was indeed {secret_number}.\n")
        wins += 1
    else:
        print(f"Better luck next time. The number was {secret_number}.\n")
        losses += 1

print("\n--- Game Over Summary ---")
print(f"Total Games Won:  {wins}")
print(f"Total Games Lost: {losses}")
print("Thanks for playing!")