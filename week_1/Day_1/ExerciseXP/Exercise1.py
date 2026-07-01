# 1. Print the following output using one line of code:
print("Hello world\n" * 4)

# 2. Write code that calculates the result of:
# (99^3)*8 (meaning 99 to the power of 3, times 8).
print((99 ** 3) * 8)

# 3. Predict the output of the following code snippets:
# Coment what is your guess, then run the code and compare
5 < 3 # False
3 == 3 # True
3 == "3" # False
"3" > 3 # False
"Hello" == "hello" # False

# 4. Create a variable called computer_brand which value is the brand name of your computer.
# Using the computer_brand variable, print a sentence that states the following:
# "I have a <computer_brand> computer."
computer_brand = "mac"
print(f"I have a {computer_brand} computer.")

# 5. Create a variable called name, and set it’s value to your name.
# Create a variable called age, and set it’s value to your age.
# Create a variable called shoe_size, and set it’s value to your shoe size.
# Create a variable called info and set it’s value to an interesting sentence about yourself. The sentence must contain all the variables created in parts 1, 2, and 3.
# Have your code print the info message.
# Run your code.
name = "Yaakov"
age = 32
shoe_size = 42
info = f"Hi my name is {name} i am {age} years old and i my shoes is size {shoe_size}."
print(info)

# 6. Create two variables, a and b.
# Each variable’s value should be a number.
# If a is bigger than b, have your code print "Hello World".
a = 5
b = 2
if a > b:
    print("hello World")

# 7. Write code that asks the user for a number and determines whether this number is odd or even.
number = int(input("Enter a number: "))
if number % 2 == 0:
    print("The number is even.")
else:
    print("The number is odd.")

# 8. Write code that asks the user for their name and determines whether or not you have the same name. Print out a funny message based on the outcome.
my_name = "Yaakov"
user_name = input("What is your name? ").lower()
if user_name == my_name:
    print("No way! We have the same name. Are you me from the future, or no?")
else:
    print(f"Phew! Your name is {user_name.capitalize()}. Thank goodness, this digital workspace isn't big enough for two Yaakovs.")

height = float(input("Enter your height in cm: "))

if height > 145:
    print("You are tall enough to ride!")
else:
    print("You need to grow some more to ride.")