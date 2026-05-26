# class Currency:
#     def __init__(self, currency, amount):
#         self.currency = currency
#         self.amount = amount
#
#     #Your code starts HERE
# 
# Using the code above, implement the relevant methods and dunder methods which will output the results below.
# Hint : When adding 2 currencies which don’t share the same label you should raise an error.

class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        # Handles pluralization format ('dollar' -> 'dollars')
        suffix = 's' if self.amount != 1 else ''
        return f"{self.amount} {self.currency}{suffix}"

    def __repr__(self):
        return self.__str__()

    def __int__(self):
        return self.amount

    def __add__(self, other):
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
            return self.amount + other.amount
        elif isinstance(other, (int, float)):
            return self.amount + other
        return NotImplemented

    def __iadd__(self, other):
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
            self.amount += other.amount
        elif isinstance(other, (int, float)):
            self.amount += other
        else:
            return NotImplemented
        return self

# Step 1: Create func.py
# Create a file named func.py.
# Define a function inside that file that takes two numbers as arguments, sums them, and prints the result.

# --- Content of func.py ---
def add_and_print(num1, num2):
    print(num1 + num2)


# Step 2: Create exercise_one.py
# Create a file named exercise_one.py.
# Import the function from func.py using one of the import syntaxes provided in the instructions.
# Call the imported function with two numbers.

# --- Content of exercise_one.py ---
from func import add_and_print

add_and_print(10, 20)

# Step 1: Import the string and random modules
# Step 2: Create a string of all letters
# Step 3: Generate a random string
# Use a loop to select 5 random characters from the combined string.
# Concatenate the characters to form the random string.

import random
import string

def generate_random_string():
    letters = string.ascii_letters
    random_chars = [random.choice(letters) for _ in range(5)]
    return "".join(random_chars)

print(generate_random_string())

# Step 1: Import the datetime module
# Step 2: Get the current date
# Step 3: Display the date

from datetime import datetime

def display_current_date():
    current_date = datetime.now().date()
    print(f"Current Date: {current_date}")

display_current_date()

# Step 1: Import the datetime module
# Step 2: Get the current date and time
# Step 3: Create a datetime object for January 1st of the next year
# Step 4: Calculate the time difference
# Step 5: Display the time difference

from datetime import datetime

def time_until_new_year():
    now = datetime.now()
    next_year = now.year + 1
    new_year_date = datetime(next_year, 1, 1, 0, 0, 0)
    time_left = new_year_date - now
    print(f"Time left until January 1st: {time_left}")

time_until_new_year()

# Create a function that accepts a birthdate as an argument (in the format of your choice), 
# then displays a message stating how many minutes the user lived in his life.

from datetime import datetime

def minutes_lived(birthday_str):
    # Expects string format: 'YYYY-MM-DD'
    birth_date = datetime.strptime(birthday_str, "%Y-%m-%d")
    now = datetime.now()
    difference = now - birth_date
    total_minutes = int(difference.total_seconds() / 60)
    print(f"You have lived for approximately {total_minutes:,} minutes.")

# Example usage:
minutes_lived("1995-05-15")

# Step 1: Install the faker module -> Run: pip install faker
# Step 2: Import the faker module
# Step 3: Create an empty list of users
# Step 4: Create a function to add users
# Step 5: Call the function and print the users list

from faker import Faker

users = []
fake = Faker()

def add_users(num_users):
    for _ in range(num_users):
        user_profile = {
            "name": fake.name(),
            "address": fake.address(),
            "language_code": fake.language_code()
        }
        users.append(user_profile)

add_users(3)
print(users)
