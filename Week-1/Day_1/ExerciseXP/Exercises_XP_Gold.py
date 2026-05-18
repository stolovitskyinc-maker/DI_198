# 1. Print the following output in one line of code:
print("Hello world\n" * 4, "I love python\n" * 4)

# 2. Ask the user to input a month (1 to 12).
# Display the season of the month received :
# Spring runs from March (3) to May (5)
# Summer runs from June (6) to August (8)
# Autumn runs from September (9) to November (11)
# Winter runs from December (12) to February (2)
month = int(input("Enter a month number (1-12): "))
if 3 <= month <= 5:
    print("The season is Spring.")
elif 6 <= month <= 8:
    print("The season is Summer.")
elif 9 <= month <= 11:
    print("The season is Autumn.")
elif month == 12 or month == 1 or month == 2:
    print("The season is Winter.")
else:
    print("Invalid month! Please enter a number between 1 and 12.")
