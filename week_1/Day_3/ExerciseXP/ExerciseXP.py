# 1. You are given two lists. Convert them into a dictionary where the first list contains the keys and the second list contains the corresponding values.
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

result_dict = dict(zip(keys, values))

print(result_dict)

# 2. Write a program that calculates the total cost of movie tickets for a family based on their ages.

# Family members’ ages are stored in a dictionary.
# The ticket pricing rules are as follows:
# Under 3 years old: Free
# 3 to 12 years old: $10
# Over 12 years old: $15
family_ages = {
    "rick": 43,
    "beth": 13,
    "morty": 5,
    "summer": 8
}

total_cost = 0

for name, age in family_ages.items():
    if age < 3:
        price = 0
    elif 3 <= age <= 12:
        price = 10
    else:
        price = 15

    total_cost += price
    print(f"{name} (Age {age}): ${price}")

print(f"\nTotal Cost for the family: ${total_cost}")

# 3. Create and manipulate a dictionary that contains information about the Zara brand.
# Create a dictionary called brand with the provided data.
# Modify and access the dictionary as follows:
# Change the value of number_stores to 2.
# Print a sentence describing Zara’s clients using the type_of_clothes key.
# Add a new key country_creation with the value Spain.
# Check if international_competitors exists and, if so, add “Desigual” to the list.
# Delete the creation_date key.
# Print the last item in international_competitors.
# Print the major colors in the US.
# Print the number of keys in the dictionary.
# Print all keys of the dictionary.
brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}

brand["number_stores"] = 2

clothes = brand["type_of_clothes"]
client_sentence = f"Zara designs clothes for {', '.join(clothes[:-1])}, and even products for the {clothes[-1]}."
print(client_sentence)

brand["country_creation"] = "Spain"

if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

del brand["creation_date"]

print(f"Last competitor: {brand['international_competitors'][-1]}")

print(f"US major colors: {brand['major_color']['US']}")

print(f"Number of keys: {len(brand)}")

print(f"All keys: {list(brand.keys())}")

# 4.You are given a list of Disney characters. Create three dictionaries based on different patterns as shown below:
# Initial list of characters
users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]

# 1a. Map characters to their indices
disney_users_A = {character: index for index, character in enumerate(users)}
print(f"Result 1: {disney_users_A}")

# 2a. Map indices to characters
disney_users_B = {index: character for index, character in enumerate(users)}
print(f"Result 2: {disney_users_B}")

# 3a. Sort characters alphabetically first, then map to new indices
disney_users_C = {character: index for index, character in enumerate(sorted(users))}
print(f"Result 3: {disney_users_C}")

