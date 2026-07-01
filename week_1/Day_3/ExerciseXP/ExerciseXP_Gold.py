# 1.-3.
Birthdays = {
    "sam" : "1993/8/13",
    "jake": "1994/12/3",
    "brett" : "1995/1/10",
    "steve" : "2001/5/20",
    "gregg" : "1999/8/17"
}

print("Welcome to the Birthday Lookup Tool!")
new_name = input("Enter a new person's name to add: ")
new_birthday = input("Enter their birthday (YYYY/MM/DD): ")

Birthdays[new_name] = new_birthday

print("\nUpdated birthday list:")
print(Birthdays)
print("-" * 30)
search_name = input("Enter a person's name: ")

birthday_found = Birthdays.get(search_name)

if birthday_found:
    print(f"{search_name}'s birthday is on {birthday_found}.")
else:
    print(f"Sorry, we don’t have the birthday information for {search_name}")

# 4a.
items = {
    "banana": 4,
    "apple": 2,
    "orange": 1.5,
    "pear": 3
}

for item, price in items.items():
    print(f"The price of a {item} is ${price}.")

# 4b.
items = {
    "banana": {"price": 4 , "stock":10},
    "apple": {"price": 2, "stock":5},
    "orange": {"price": 1.5 , "stock":24},
    "pear": {"price": 3 , "stock":1}
}
total_cost = 0

for name, details in items.items():
    items_total = details["price"] * details["stock"]

    total_cost += items_total

print(f'{total_cost:.2f}')