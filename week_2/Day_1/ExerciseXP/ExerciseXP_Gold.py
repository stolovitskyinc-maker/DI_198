# 1.
# Instructions
# Write a class called Circle that receives a radius as an argument (default is 1.0).
# Write two instance methods to compute perimeter and area.
# Write a method that prints the geometrical definition of a circle.

import math

class Circle:
    def __init__(self, radius=1.0):
        self.radius = radius

    def compute_perimeter(self):
        return 2 * math.pi * self.radius

    def compute_area(self):
        return math.pi * (self.radius ** 2)

    def print_definition(self):
        print("A circle is a shape consisting of all points in a plane that are at a given distance from a given point, the centre.")

# Example usage:
my_circle = Circle(5.0)
print(f"Perimeter: {my_circle.compute_perimeter():.2f}")
print(f"Area: {my_circle.compute_area():.2f}")
my_circle.print_definition()

# 2.
# Instructions
# Create a class called MyList, the class should receive a list of letters.
# Add a method that returns the reversed list.
# Add a method that returns the sorted list.
# Bonus : Create a method that generates a second list with the same length as mylist. 
# The list should be constructed with random numbers. (use list comprehension).

import random

class MyList:
    def __init__(self, letters):
        self.letters = letters

    def get_reversed(self):
        return self.letters[::-1]

    def get_sorted(self):
        return sorted(self.letters)

    # Bonus method
    def generate_random_list(self):
        return [random.randint(1, 100) for _ in range(len(self.letters))]

# Example usage:
char_list = MyList(['d', 'a', 'c', 'b'])
print("Original:", char_list.letters)
print("Reversed:", char_list.get_reversed())
print("Sorted:", char_list.get_sorted())
print("Random Numbers List:", char_list.generate_random_list())

# 3.
# Instructions
# The purpose of this exercise is to create a restaurant menu. 
# The code will allow a manager to add and delete dishes.
# Create a python file called menu_manager.py.
# Create a class called MenuManager.
# Create a method __init__ that instantiates an attribute called menu. 
# The menu attributes value will be all the current dishes (list of dictionaries). 
# Each dish will be stored in a dictionary where the keys are name, price, spice level and gluten index.

class MenuManager:
    def __init__(self):
        # Initializing the menu with the provided starting dishes
        self.menu = [
            {"name": "Soup", "price": 10, "spice": "B", "gluten": False},
            {"name": "Hamburger", "price": 15, "spice": "A", "gluten": True},
            {"name": "Salad", "price": 18, "spice": "A", "gluten": False},
            {"name": "French Fries", "price": 5, "spice": "C", "gluten": False},
            {"name": "Beef bourguignon", "price": 25, "spice": "B", "gluten": True}
        ]

    def add_item(self, name, price, spice, gluten):
        new_dish = {
            "name": name,
            "price": price,
            "spice": spice,
            "gluten": gluten
        }
        self.menu.append(new_dish)
        print(f"'{name}' has been successfully added to the menu.")

    def update_item(self, name, price, spice, gluten):
        for dish in self.menu:
            if dish["name"].lower() == name.lower():
                dish["price"] = price
                dish["spice"] = spice
                dish["gluten"] = gluten
                print(f"'{name}' has been successfully updated.")
                return
        print(f"Notification to Manager: '{name}' is not in the menu.")

    def remove_item(self, name):
        for dish in self.menu:
            if dish["name"].lower() == name.lower():
                self.menu.remove(dish)
                print(f"'{name}' has been deleted.")
                print("Updated Menu:", self.menu)
                return
        print(f"Notification to Manager: '{name}' is not in the menu.")

# Example usage:
manager = MenuManager()

# Test adding an item
manager.add_item("Tacos", 12, "C", False)

# Test updating an item
manager.update_item("Soup", 12, "A", False)

# Test removing an item
manager.remove_item("French Fries")

# Test warning notification
manager.remove_item("Pizza")
