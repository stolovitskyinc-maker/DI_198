# Challenge 1. 1. Ask the user for two inputs:

# A number (integer).
# A length (integer).
# 2. Create a program that generates a list of multiples of the given number.
# 3. The list should stop when it reaches the length specified by the user.
num = int(input("Enter the number: "))
length = int(input("Enter the length: "))

multiples = [num * i for i in range(1, length + 1)]

print(multiples)

# Challenge 2. 1. Ask the user for a string.
# 2. Write a program that processes the string to remove consecutive duplicate letters.

# The new string should only contain unique consecutive letters.
# For example, “ppoeemm” should become “poem” (removes consecutive duplicates like ‘pp’, ‘ee’, and ‘mm’).
# 3. The program should print the modified string.
user_string = input("Enter a string: ")

cleaned_chars = []

for char in user_string:
    if not cleaned_chars or char != cleaned_chars[-1]:
        cleaned_chars.append(char)

result_string = "".join(cleaned_chars)

print(f"Modified string: {result_string}")