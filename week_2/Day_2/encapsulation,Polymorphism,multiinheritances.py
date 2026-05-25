# class Computer():

#     def __init__(self):
#         self.name = "Apple Computer" # public
#         self.__max_price = 900 # private

#     def sell(self):            # public method
#         print(f"Selling Price: {self.__max_price}")

#     def __sell(self):          # private method
#       print('This is private method')

#     def set_max_price(self, price):
#         self.__max_price = price

# c = Computer()
# encapsulation = __
#===================================================================================

# class Parrot():

#     def fly(self):
#         print("Parrot can fly")

#     def swim(self):
#         print("Parrot can't swim")

# class Penguin():

#     def fly(self):
#         print("Penguin can't fly")

#     def swim(self):
#         print("Penguin can swim")

# # common interface
# def flying_test(bird):
#     bird.fly()

# #instantiate objects
# blu = Parrot()
# peggy = Penguin()

# # passing the object
# flying_test(blu)
# # >> Parrot can fly

# flying_test(peggy)
# # >> Penguin can't fly
#==========================================================================

# class Alien():
#     def __init__(self, name, planet):
#         self.name = name
#         self.planet = planet

#     def fly(self):
#         print(self.name, 'is flying!')

#     def sleep(self):
#         print("Aliens don't sleep")

# class Animal():
#     def __init__(self, name):
#         self.name = name

#     def sleep(self):
#         print("zzzZZZZZ")

# class Dog(Animal):
#     def bark(self):
#         print(f"{self.name} barked, WAF !")

# class AlienDog(Alien, Dog):
#     def bark(self):
#         print(f"{self.name} barked, 0ul10ul0u (that's how aliens dogs bark..) !")


# my_normal_dog = Dog("Roger")
# my_normal_dog.sleep()
# # >> zzzZZZZZ

# my_normal_dog.bark()
# # >> Roger barked, WAF !

# my_alien_dog = AlienDog("Rex", "Neptune")
# print(my_alien_dog.planet)
# # >> Neptune

# my_alien_dog.fly()
# # >> Rex is flying!

# my_alien_dog.sleep()
# # >> Aliens don't sleep

# my_alien_dog.bark()
# # >> Rex barked, 0ul10ul0u (that's how aliens dogs bark..) !
