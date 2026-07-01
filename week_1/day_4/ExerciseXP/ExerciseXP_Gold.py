# ==============================================================================
# Exercise 1 : When will I retire ?
# Instructions
# The point of the exercise is to check if a person can retire depending on their age and their gender.
# Note : Let’s say retirement age is 67 for men, and 62 for women (born after April, 1947).
# 
# Create a function get_age(year, month, day)
# Hard-code the current year and month in your code (there are better ways of doing this, but for now it will be enough.)
# After calculating the age of a person, the function should return the age (the age is an integer).
# Create a function can_retire(gender, date_of_birth).
# It should call the get_age function (with what arguments?) in order to receive an age.
# Now it has all the information it needs in order to determine if the person with the given gender and date of birth is able to retire or not.
# Calculate. You may need to do a little more hard-coding here.
# Return True if the person can retire, and False if he/she can’t.
# Some Hints
# 
# Ask for the user’s gender as “m” or “f”.
# Ask for the user’s date of birth in the form of “yyyy/mm/dd”, eg. “1993/09/21”.
# Call can_retire to get a definite value for whether the person can or can’t retire.
# Display a message informing the user whether they can retire or not.
# As always, test your code to ensure it works.
# ==============================================================================

def get_age(year, month, day):
    # Hard-coded current year and month as requested
    current_year = 2026
    current_month = 5
    
    # Calculate basic age difference
    age = current_year - year
    
    # If the current month is before the birth month, they haven't had their birthday yet this year
    if current_month < month:
        age -= 1
        
    return age


def can_retire(gender, date_of_birth):
    # Split the "yyyy/mm/dd" string into separate integers
    parts = date_of_birth.split("/")
    birth_year = int(parts[0])
    birth_month = int(parts[1])
    birth_day = int(parts[2])
    
    # Call get_age using the extracted birth details
    age = get_age(birth_year, birth_month, birth_day)
    
    # Determine retirement eligibility based on gender rules
    if gender.lower() == 'm':
        if age >= 67:
            return True
    elif gender.lower() == 'f':
        if age >= 62:
            return True
            
    return False


# --- Demonstration running code for Exercise 1 ---
print("--- Exercise 1: Retirement Checker ---")
user_gender = input("Enter your gender (m/f): ")
user_dob = input("Enter your date of birth (yyyy/mm/dd): ")

if can_retire(user_gender, user_dob):
    print("Result: You are eligible to retire! 🎉")
else:
    print("Result: You cannot retire yet. Keep on working! 💼")
print("-" * 40)


# ==============================================================================
# Exercise 2 : Sum
# Instructions
# Write a function that accepts one parameter (an int: X) and returns the value of X+XX+XXX+XXXX.
# Example:
# If X=3, the output when calling our function should be 3702 (3 + 33 + 333 + 3333)
# 
# Hint: treating our number as a int or a str at different points in our code may be helpful
# ==============================================================================

def calculate_string_sum(X):
    # Convert the integer into a string to multiply its characters easily
    str_x = str(X)
    
    # Generate the repeating patterns
    term1 = int(str_x)
    term2 = int(str_x * 2)
    term3 = int(str_x * 3)
    term4 = int(str_x * 4)
    
    # Return the sum of all terms
    return term1 + term2 + term3 + term4


# --- Demonstration running code for Exercise 2 ---
print("\n--- Exercise 2: X+XX+XXX+XXXX Sum ---")
test_number = 3
result_sum = calculate_string_sum(test_number)
print(f"When X = {test_number}, the sum result is: {result_sum}")
print("-" * 40)


# ==============================================================================
# Exercise 3 : Double Dice
# Instructions
# Create a function that will simulate the rolling of a dice. Call it throw_dice. It should return an integer between 1 and 6.
# Create a function called throw_until_doubles.
# It should keep throwing 2 dice (using your throw_dice function) until they both land on the same number, ie. until we reach doubles.
# For example: (1, 2), (3, 1), (5,5) → then stop throwing, because doubles were reached.
# This function should return the number of times it threw the dice in total. In the example above, it should return 3.
# 
# Create a main function.
# It should throw doubles 100 times (ie. call your throw_until_doubles function 100 times), and store the results of those function calls (in other words, how many throws it took until doubles were thrown, each time) in a collection. (What kind of collection? Read below to understand what we will need the data for, and this should help you decide which data structure to use).
# 
# After the 100 doubles are thrown, print out a message telling the user how many throws it took in total to reach 100 doubles.
# Also print out a message telling the user the average amount of throws it took to reach doubles. Round this off to 2 decimal places.
# ==============================================================================

import random

def throw_dice():
    # Returns a random integer between 1 and 6
    return random.randint(1, 6)


def throw_until_doubles():
    throw_count = 0
    while True:
        # Roll two individual dice
        die1 = throw_dice()
        die2 = throw_dice()
        throw_count += 1
        
        # If the dice numbers match, stop rolling
        if die1 == die2:
            return throw_count


def main():
    # A list collection is used because we need to preserve each individual numeric score to compute the sum and average later
    throw_records = []
    
    # Run the double-dice game simulation 100 times
    for _ in range(100):
        attempts = throw_until_doubles()
        throw_records.append(attempts)
        
    # Calculate final collection analysis metrics
    total_throws = sum(throw_records)
    average_throws = total_throws / len(throw_records)
    
    print(f"Total throws over 100 rounds: {total_throws}")
    print(f"Average throws to reach doubles: {average_throws:.2f}")


# --- Demonstration running code for Exercise 3 ---
print("\n--- Exercise 3: Double Dice Simulation ---")
main()
print("-" * 40)
