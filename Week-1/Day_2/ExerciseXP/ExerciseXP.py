# 1. Create a set called my_fav_numbers and populate it with your favorite numbers.
# Add two new numbers to the set.
# Remove the last number you added to the set.
# Create another set called friend_fav_numbers and populate it with your friend’s favorite numbers.
# Concatenate my_fav_numbers and friend_fav_numbers to create a new set called our_fav_numbers.
# Note: Sets are unordered collections, so ensure no duplicate numbers are added.
my_fav_numbers = {7, 13, 42}
my_fav_numbers.add(8)
my_fav_numbers.add(99)
my_fav_numbers.remove(99)
friend_fav_numbers = {3, 7, 11, 21}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

# 2. Given a tuple of integers, try to add more integers to the tuple.
# Hint: Tuples are immutable, meaning they cannot be changed after creation. Think about why you can’t add more integers to a tuple.
my_tuple = (1, 2, 3)
my_tuple = my_tuple + (4, 5)

# 3. You have a list: basket = ["Banana", "Apples", "Oranges", "Blueberries"]
# Remove "Banana" from the list.
# Remove "Blueberries" from the list.
# Add "Kiwi" to the end of the list.
# Add "Apples" to the beginning of the list.
# Count how many times "Apples" appear in the list.
# Empty the list.
# Print the final state of the list.
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
# Remove "Banana"
basket.remove("Banana")
# Remove "Blueberries"
basket.remove("Blueberries")
# Add "Kiwi" to the end
basket.append("Kiwi")
# Add "Apples" to the beginning
basket.insert(0, "Apples")
# Count how many times "Apples" appear
apple_count = basket.count("Apples")
# Empty the list
basket.clear()
# Print the final state
print(basket)

# 4. Recap: What is a float? What’s the difference between a float and an integer?
# Create a list containing the following sequence of mixed types: floats and integers:
# 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5.
# Avoid hard-coding each number manually.
# Think: Can you generate this sequence using a loop or another method?
# mixed_list = []
# current = 1.5
while current <= 5:
    if current.is_integer():
        mixed_list.append(int(current))
    else:
        mixed_list.append(current)
    current += 0.5

print(mixed_list)

# 5. Write a for loop to print all numbers from 1 to 20, inclusive.
# Write another for loop that prints every number from 1 to 20 where the index is even.

for i in range(1, 21):
    print(i)

for i in range(2, 21, 2):
    print(i)

# 6. Use an input to ask the user to enter their name.
# Using a while True loop, check if the user gave a proper name (not digits and at least 3 letters long)
# hint: check for the method isdigit()
# if the input is incorrect, keep asking for the correct input until it is correct
# if the input is correct print “thank you” and break the loop

while True:
    name = input("Please enter your name: ")

    if name.isdigit() or len(name) < 3:
        print("Invalid name. It must not contain digits and must be at least 3 letters long.")
    else:
        print("thank you")
        break

# 7. Ask the user to input their favorite fruits (they can input several fruits, separated by spaces).
# Store these fruits in a list.
# Ask the user to input the name of any fruit.
# If the fruit is in their list of favorite fruits, print:
# "You chose one of your favorite fruits! Enjoy!"
# If not, print:
# "You chose a new fruit. I hope you enjoy it!"
fav_input = input("Enter your favorite fruits (separated by spaces): ")
fav_fruits = fav_input.split()

chosen_fruit = input("Enter the name of any fruit: ")

if chosen_fruit in fav_fruits:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy it!")

# 8. Write a loop that asks the user to enter pizza toppings one by one.
# Stop the loop when the user types 'quit'.
# For each topping entered, print:
# "Adding [topping] to your pizza."
# After exiting the loop, print all the toppings and the total cost of the pizza.
# The base price is $10, and each topping adds $2.50.
toppings = []
base_price = 10.00
topping_price = 2.50

while True:
    topping = input("Enter a pizza topping (or type 'quit' to finish): ").strip()
    
    if topping.lower() == 'quit':
        break
    
    if not topping:
        print("Please enter a valid topping.")
        continue
        
    toppings.append(topping)
    print(f"Adding {topping} to your pizza.")

total_cost = base_price + (len(toppings) * topping_price)

print("\n--- Your Order Summary ---")
if toppings:
    print("Toppings selected:")
    for item in toppings:
        print(f"- {item}")
else:
    print("No toppings selected (Plain Cheese).")

print(f"Total cost: ${total_cost:.2f}")

# 9. Ask for the age of each person in a family who wants to buy a movie ticket.
# Calculate the total cost based on the following rules:
# Free for people under 3.
# $10 for people aged 3 to 12.
# $15 for anyone over 12.
# Print the total ticket cost.

total_cost = 0
family_size = 0

print("Enter the age of each family member to calculate ticket costs.")
print("Type 'done' when you have finished entering ages.")

while True:
    user_input = input("Enter age (or 'done'): ").strip().lower()
    
    if user_input == 'done':
        break
        
    if not user_input.isdigit():
        print("Please enter a valid whole number for age.")
        continue
        
    age = int(user_input)
    family_size += 1
    
    if age < 3:
        ticket_price = 0
        print("Under 3: Free")
    elif 3 <= age <= 12:
        ticket_price = 10
        print("Age 3-12: $10")
    else:
        ticket_price = 15
        print("Over 12: $15")
        
    total_cost += ticket_price

print("\n--- Ticket Order Summary ---")
print(f"Total family members: {family_size}")
print(f"Total ticket cost: ${total_cost}.00")