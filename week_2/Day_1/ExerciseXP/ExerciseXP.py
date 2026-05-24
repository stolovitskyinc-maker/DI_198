# 1.
# Key Python Topics:
# Classes and objects
# Object instantiation
# Attributes
# Functions

class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

# Step 1: Create cat objects
cat1 = Cat("Whiskers", 3)
cat2 = Cat("Felix", 7)
cat3 = Cat("Mitsy", 5)

# Step 2: Create a function to find the oldest cat
def find_oldest_cat(cat1, cat2, cat3):
    if cat1.age >= cat2.age and cat1.age >= cat3.age:
        return cat1
    elif cat2.age >= cat1.age and cat2.age >= cat3.age:
        return cat2
    else:
        return cat3

# Step 3: Print the oldest cat’s details
oldest = find_oldest_cat(cat1, cat2, cat3)
print(f"The oldest cat is {oldest.name}, and is {oldest.age} years old.")

# 2.
# Goal: Create a Dog class, instantiate objects, call methods, and compare dog sizes.
# Key Python Topics:
# Classes and objects
# Object instantiation
# Methods
# Attributes
# Conditional statements (if)

# Step 1: Create the Dog Class
class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height

    def bark(self):
        print(f"{self.name} goes woof!")

    def jump(self):
        jump_height = self.height * 2
        print(f"{self.name} jumps {jump_height} cm high!")

# Step 2: Create Dog Objects
davids_dog = Dog("Rex", 50)
sarahs_dog = Dog("Teacup", 15)

# Step 3: Print Dog Details and Call Methods
print(f"David's dog: {davids_dog.name}, Height: {davids_dog.height}cm")
davids_dog.bark()
davids_dog.jump()

print(f"Sarah's dog: {sarahs_dog.name}, Height: {sarahs_dog.height}cm")
sarahs_dog.bark()
sarahs_dog.jump()

# Step 4: Compare Dog Sizes
if davids_dog.height > sarahs_dog.height:
    print(f"The biggest dog is {davids_dog.name}.")
elif sarahs_dog.height > davids_dog.height:
    print(f"The biggest dog is {sarahs_dog.name}.")
else:
    print("Both dogs are the same size.")



# Goal: Create a Song class to represent song lyrics and print them.
# Key Python Topics:
# Classes and objects
# Object instantiation
# Methods
# Lists

# Step 1: Create the Song Class
class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)

# Example Usage:
stairway = Song([
    "There’s a lady who's sure", 
    "all that glitters is gold", 
    "and she’s buying a stairway to heaven"
])

stairway.sing_me_a_song()


# 3.
# Goal: Create a Zoo class to manage animals. The class should allow adding animals, displaying them, selling them, and organizing them into alphabetical groups.
# Key Python Topics:
# Classes and objects
# Object instantiation
# Methods
# Lists
# Dictionaries (for grouping)
# String manipulation

# Step 1: Define the Zoo Class
class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []
        self.groups = {}

    # Bonus: Modified to accept *args for multiple animals
    def add_animal(self, *new_animals):
        for animal in new_animals:
            if animal not in self.animals:
                self.animals.append(animal)

    def get_animals(self):
        print(f"Animals in {self.name}: {', '.join(self.animals)}")

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(f"{animal_sold} was sold.")
        else:
            print(f"{animal_sold} is not in the zoo.")

    def sort_animals(self):
        self.animals.sort()
        self.groups = {}
        for animal in self.animals:
            first_letter = animal[0].upper()
            if first_letter not in self.groups:
                self.groups[first_letter] = []
            self.groups[first_letter].append(animal)
        return self.groups

    def get_groups(self):
        for letter, animal_list in self.groups.items():
            print(f"{letter}: {animal_list}")

# Step 2: Create a Zoo Object
brooklyn_safari = Zoo("Brooklyn Safari")

# Step 3: Call the Zoo Methods
# Testing the *args bonus feature:
brooklyn_safari.add_animal("Giraffe", "Bear", "Baboon", "Cat", "Cougar")
brooklyn_safari.get_animals()

brooklyn_safari.sell_animal("Bear")
brooklyn_safari.get_animals()

brooklyn_safari.sort_animals()
print("\n--- Zoo Groups ---")
brooklyn_safari.get_groups()

# 4.
# Goal: Create a Zoo class to manage animals. The class should allow adding animals, displaying them, selling them, and organizing them into alphabetical groups.
# Key Python Topics:
# Classes and objects
# Object instantiation
# Methods
# Lists
# Dictionaries (for grouping)
# String manipulation

# Step 1: Define the Zoo Class
class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []
        self.groups = {}

    # Bonus: Modified to accept *args for multiple animals
    def add_animal(self, *new_animals):
        for animal in new_animals:
            if animal not in self.animals:
                self.animals.append(animal)

    def get_animals(self):
        print(f"Animals in {self.name}: {', '.join(self.animals)}")

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(f"{animal_sold} was sold.")
        else:
            print(f"{animal_sold} is not in the zoo.")

    def sort_animals(self):
        self.animals.sort()
        self.groups = {}
        for animal in self.animals:
            first_letter = animal[0].upper()
            if first_letter not in self.groups:
                self.groups[first_letter] = []
            self.groups[first_letter].append(animal)
        return self.groups

    def get_groups(self):
        for letter, animal_list in self.groups.items():
            print(f"{letter}: {animal_list}")

# Step 2: Create a Zoo Object
brooklyn_safari = Zoo("Brooklyn Safari")

# Step 3: Call the Zoo Methods
# Testing the *args bonus feature:
brooklyn_safari.add_animal("Giraffe", "Bear", "Baboon", "Cat", "Cougar")
brooklyn_safari.get_animals()

brooklyn_safari.sell_animal("Bear")
brooklyn_safari.get_animals()

brooklyn_safari.sort_animals()
print("\n--- Zoo Groups ---")
brooklyn_safari.get_groups()
