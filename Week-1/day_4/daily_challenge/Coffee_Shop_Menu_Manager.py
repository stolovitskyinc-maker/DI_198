# (1.)You were hired to help a small coffee shop manage their product menu using Python.

# Write a program that:

# 1. Stores the coffee shop menu in memory
# 2. Lets the user:

# Create a new item
# Read (view) all items
# Update an item’s price
# Delete an item
# Exit
# Your program must be organized with functions.
# Do not write all the logic in one giant while loop.
# You should split behavior into reusable functions.



# 1. Data structure
# We will represent the menu using a dictionary called menu.

# The key is the drink name (string)
# The value is the price (float)
# Example starting data (you MUST start with this so tests are consistent):

# menu = {
#     "espresso": 7.0,
#     "latte": 12.0,
#     "cappuccino": 10.0
# }
menu = {"espresso": 7.0, "latte": 12.0, "cappuccino": 10.0}

def show_menu(menu_dict):
    """Prints all items in the dictionary or a message if empty."""
    if not menu_dict:
        print("The menu is empty.")
        return

    print("\nCurrent menu:")
    for drink, price in menu_dict.items():
        print(f"{drink} - {price}₪")


def add_item(menu_dict):
    """Asks for a drink and positive price, then adds it if unique."""
    drink = input("Enter new drink name: ").strip().lower()

    if drink in menu_dict:
        print("Item already exists!")
        return

    try:
        price = float(input("Enter price: "))
        if price < 0:
            print("Invalid price.")
            return

        menu_dict[drink] = price
        print(f'"{drink}" added!')
    except ValueError:
        print("Invalid price format.")


def update_price(menu_dict):
    """Updates the price of an existing drink with validation."""
    drink = input("Enter drink name to update: ").strip().lower()

    if drink in menu_dict:
        try:
            new_price = float(input("Enter new price: "))
            if new_price < 0:
                print("Invalid price.")
                return

            menu_dict[drink] = new_price
            print("Price updated!")
        except ValueError:
            print("Invalid price format.")
    else:
        print("Item not found.")


def delete_item(menu_dict):
    """Removes a drink from the menu if it exists."""
    drink = input("Enter drink name to remove: ").strip().lower()

    if drink in menu_dict:
        del menu_dict[drink]
        print("Item deleted.")
    else:
        print("Item not found.")

def search_item(menu_dict):
    """Searches for an item and prints its price or a missing message."""
    drink = input("Enter drink name to search: ").strip().lower()

    if drink in menu_dict:
        print(f"The price of {drink} is {menu_dict[drink]}₪")
    else:
        print("Not in the menu.")

def apply_discount(menu_dict, percent):
    """Reduces every price in the menu by the given percentage."""
    if not 0 <= percent <= 100:
        print("Invalid discount percentage.")
        return

    for drink in menu_dict:
        menu_dict[drink] = round(menu_dict[drink] * (1 - percent / 100), 2)
    print(f"Happy Hour! Applied a {percent}% discount to all items.")


def show_options():
    """Prints the main menu of actions including Option 6."""
    print("\nWhat would you like to do?")
    print("1. Show menu")
    print("2. Add item")
    print("3. Update price")
    print("4. Delete item")
    print("5. Exit")
    print("6. Search item")


def run_coffee_shop():
    """Main controller loop for the application."""
    while True:
        show_options()
        choice = input("Enter choice (1-6): ").strip()

        if choice == "1":
            show_menu(menu)
        elif choice == "2":
            add_item(menu)
        elif choice == "3":
            update_price(menu)
        elif choice == "4":
            delete_item(menu)
        elif choice == "5":
            print("Goodbye!")
            break
        elif choice == "6":
            search_item(menu)
        else:
            print("Invalid choice, try again.")

if __name__ == "__main__":
    run_coffee_shop()
