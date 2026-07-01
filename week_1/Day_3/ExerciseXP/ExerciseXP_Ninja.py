# 1. Copy the string into your code
cars_string = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"

# 2. Convert it into a list using Python
manufacturers = [car.strip() for car in cars_string.split(",")]

# 3. Print out a message saying how many manufacturers/companies are in the list
print(f"There are {len(manufacturers)} manufacturers in the list.")

# 4. Print the list of manufacturers in reverse/descending order (Z-A)
descending_cars = sorted(manufacturers, reverse=True)
print(f"Manufacturers in descending order (Z-A): {descending_cars}")

# 5. Using loops or list comprehension:
# Find out how many manufacturers’ names have the letter ‘o’ in them.
has_o = [name for name in manufacturers if 'o' in name.lower()]
print(f"Number of manufacturers with 'o' in their name: {len(has_o)}")

# Find out how many manufacturers’ names do not have the letter ‘i’ in them.
no_i = [name for name in manufacturers if 'i' not in name.lower()]
print(f"Number of manufacturers without 'i' in their name: {len(no_i)}")
