class Dog:
    species = "canis familiaris"

    def __init__(self, name):
        self.name = name

    def bark(self):
        print(f"{self.name} barked, BowWow!")

barky = Dog('barky')
barky.bark()
fido = Dog('fido')
fido.bark()

print(fido.species)
print(barky.species)
print(Dog.species)

Dog.species = 'Dog'

print(fido.species)
print(barky.species)
print(Dog.species)