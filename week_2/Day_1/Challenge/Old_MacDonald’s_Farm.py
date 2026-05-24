# Step 1: Create the Farm Class
# This class will represent a farm and its animals.

class Farm:
    # Step 2: Implement the __init__ Method
    def __init__(self, farm_name):
        self.name = farm_name
        self.animals = {}

    # Step 3: Implement the add_animal Method
    def add_animal(self, animal_type, count=1):
        if animal_type in self.animals:
            self.animals[animal_type] += count
        else:
            self.animals[animal_type] = count

    # Step 4: Implement the get_info Method
    def get_info(self):
        info_string = f"{self.name}'s farm\n\n"
        
        for animal, count in self.animals.items():
            info_string += f"{animal} : {count}\n"
            
        info_string += f"\n    E-I-E-I-0!"
        return info_string

# Step 5: Test Your Code
macdonald = Farm("McDonald")
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())
