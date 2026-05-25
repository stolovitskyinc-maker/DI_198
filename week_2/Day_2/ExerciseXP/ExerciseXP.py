# Exercise 1: Cats
# Step 1: Create the Siamese Class
# Step 2: Create a List of Cat Instances
# Step 3: Create a Pets Instance
# Step 4: Take Cats for a Walk

class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

# Step 1: Create the Siamese Class
class Siamese(Cat):
    pass

# Step 2: Create a List of Cat Instances
bengal_obj = Bengal("Leo", 3)
chartreux_obj = Chartreux("Mia", 5)
siamese_obj = Siamese("Luna", 2)

all_cats = [bengal_obj, chartreux_obj, siamese_obj]

# Step 3: Create a Pets Instance
sara_pets = Pets(all_cats)

# Step 4: Take Cats for a Walk
sara_pets.walk()

# Exercise 2: Dogs
# Step 1: Create the Dog Class with name, age, and weight attributes.
# Implement bark(), run_speed(), and fight(other_dog) methods.
# Step 2: Create Dog Instances
# Step 3: Test Dog Methods

class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return (self.weight / self.age) * 10

    def fight(self, other_dog):
        self_force = self.run_speed() * self.weight
        other_force = other_dog.run_speed() * other_dog.weight
        
        if self_force > other_force:
            return f"{self.name} won the fight!"
        elif other_force > self_force:
            return f"{other_dog.name} won the fight!"
        else:
            return "It's a tie!"

# Step 2: Create Dog Instances
dog1 = Dog("Rex", 4, 25)
dog2 = Dog("Bolt", 2, 18)
dog3 = Dog("Max", 6, 30)

# Step 3: Test Dog Methods
print(dog1.bark())
print(f"{dog2.name}'s running speed: {dog2.run_speed():.2f}")
print(dog1.fight(dog2))
print(dog3.fight(dog1))

# Exercise 3: Dogs Domesticated
# Step 1: Import the Dog Class (Assume it is available in the environment)
# Step 2: Create the PetDog Class inheriting from Dog.
# Implement trained attribute, train(), play(*args), and do_a_trick() methods.
# Step 3: Test PetDog Methods

import random

# Re-using the Dog class logic from Exercise 2 for the environment setup
class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        # Extract names from Dog instances or strings passed into *args
        names = [dog.name if isinstance(dog, Dog) else str(dog) for dog in args]
        all_names = [self.name] + names
        names_string = ", ".join(all_names[:-1]) + " and " + all_names[-1] if len(all_names) > 1 else self.name
        print(f"{names_string} all play together")

    def do_a_trick(self):
        if self.trained:
            tricks = [
                "does a barrel roll", 
                "stands on his back legs", 
                "shakes your hand", 
                "plays dead"
            ]
            print(f"{self.name} {random.choice(tricks)}")
        else:
            print(f"{self.name} is not trained yet!")

# Step 3: Test PetDog Methods
pet_dog1 = PetDog("Buddy", 3, 15)
pet_dog2 = PetDog("Rocky", 4, 22)

pet_dog1.train()
pet_dog1.play(pet_dog2, "Bella")  # Accepts both Dog instances and string names
pet_dog1.do_a_trick()

# Exercise 4: Family and Person Classes
# Step 1: Create the Person Class with first_name, age, last_name, and is_18() method.
# Step 2: Create the Family Class with born(), check_majority(), and family_presentation() methods.

class Person:
    def __init__(self, first_name, age):
        self.first_name = first_name
        self.age = age
        self.last_name = ""

    def is_18(self):
        return self.age >= 18

class Family:
    def __init__(self, last_name):
        self.last_name = last_name
        self.members = []

    def born(self, first_name, age):
        new_person = Person(first_name, age)
        new_person.last_name = self.last_name
        self.members.append(new_person)

    def check_majority(self, first_name):
        for member in self.members:
            if member.first_name == first_name:
                if member.is_18():
                    print("You are over 18, your parents Jane and John accept that you will go out with your friends")
                else:
                    print("Sorry, you are not allowed to go out with your friends.")
                return
        print(f"No family member found with the name {first_name}.")

    def family_presentation(self):
        print(f"\nFamily Name: {self.last_name}")
        print("Members:")
        for member in self.members:
            print(f"- {member.first_name}, Age: {member.age}")

# Testing the implementation
smith_family = Family("Smith")

# Adding members using born()
smith_family.born("Alice", 20)
smith_family.born("Bob", 15)

# Displaying family setup
smith_family.family_presentation()

# Checking majority rules
smith_family.check_majority("Alice")
smith_family.check_majority("Bob")
