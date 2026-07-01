# 1. Write a program that calculates and prints a value according to this given formula:
# Q = Square root of [(2 * C * D)/H]
# Following are the fixed values of C and H:
# C is 50.
# H is 30.
# Ask the user for a comma-separated string of numbers, use each number from the user as D in the formula and return all the results
import math

C = 50
H = 30

user_input = input("Enter comma-separated values for D: ")
d_values = user_input.split(",")

results = []

for item in d_values:

    D = float(item.strip())

    Q = math.sqrt((2 * C * D) / H)

    rounded_Q = str(round(Q))
    results.append(rounded_Q)

final_output = ",".join(results)

print(f"Output: {final_output}")

# 2.Given a list of 10 integers to analyze. For example:

#     [3, 47, 99, -80, 22, 97, 54, -23, 5, 7] 
#     [44, 91, 8, 24, -6, 0, 56, 8, 100, 2] 
#     [3, 21, 76, 53, 9, -82, -3, 49, 1, 76] 
#     [18, 19, 2, 56, 33, 17, 41, -63, -82, 1]


# 1. Store the list of numbers in a variable.

# 2. Print the following information:
# a. The list of numbers – printed in a single line
# b. The list of numbers – sorted in descending order (largest to smallest)
# c. The sum of all the numbers

# 3. A list containing the first and the last numbers.

# 4. A list of all the numbers greater than 50.

# 5. A list of all the numbers smaller than 10.

# 6. A list of all the numbers squared – eg. for [1, 2, 3] you would print “1 4 9”.

# 7. The numbers without any duplicates – also print how many numbers are in the new list.

# 8. The average of all the numbers.

# 9. The largest number.

# 10.The smallest number.
numbers = [3, 47, 99, -80, 22, 97, 54, -23, 5, 7]

print(f"2a. Original list: {numbers}")

sorted_descending = sorted(numbers, reverse=True)
print(f"2b. Sorted descending: {sorted_descending}")

total_sum = sum(numbers)
print(f"2c. Sum of all numbers: {total_sum}")

first_and_last = [numbers[0], numbers[-1]]
print(f"3. First and last numbers: {first_and_last}")

greater_than_50 = [x for x in numbers if x > 50]
print(f"4. Numbers greater than 50: {greater_than_50}")

smaller_than_10 = [x for x in numbers if x < 10]
print(f"5. Numbers smaller than 10: {smaller_than_10}")

squares = [x ** 2 for x in numbers]
squares_string = " ".join(map(str, squares))
print(f"6. Numbers squared: {squares_string}")

no_duplicates = list(dict.fromkeys(numbers))
print(f"7. Unique numbers: {no_duplicates} (Count: {len(no_duplicates)})")

average = sum(numbers) / len(numbers)
print(f"8. Average: {average}")

print(f"9. Largest number: {max(numbers)}")

print(f"10. Smallest number: {min(numbers)}")