# Ask the user for a number between 1 and 100
user_input = int(input("Pick a number between 1 and 100: "))

# Check conditions from most specific to least specific
if user_input % 15 == 0:
    print("FizzBuzz")
elif user_input % 3 == 0:
    print("Fizz")
elif user_input % 5 == 0:
    print("Buzz")
else:
    print(user_input)
