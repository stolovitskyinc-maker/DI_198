# class Animal:
#     def __init__(self, name):
#         self.name = name

# class Dog(Animal):
#     def bark(self):
#         print(f"{self.name} barked, BowWow !")

# mans_best_friend = Dog("winter")

# print(mans_best_friend)
# mans_best_friend.bark()

# fish = Animal("fred")
# print(fish.name)

#fish dont bark
#fish.bark()
#========================================================================================

# class Animal():
#     def __init__(self, type, number_legs, sound):
#         self.type = type
#         self.number_legs = number_legs
#         self.sound = sound

#     def make_sound(self):
#         print(f"I am an animal, and I love saying {self.sound}")

# class Dog(Animal):
#     pass

# rex= Dog("dog", 4, "wouaf")
# print('This animal is a:', rex.type)
# # >> This animal is a dog

# print('This dog has', rex.number_legs , ' legs')
# # >> This dog has 4 legs

# print('This dog makes the sound ', rex.sound)
# # >> This dog makes the sound wouaf

# rex.make_sound()
# >> I am an animal, and I love saying wouaf

#===========================================================================================

# class Circle:
#     color = "red"

# class NewCircle(Circle):
#     color = "blue"

# nc = NewCircle
# print(nc.color)
# # >> What will be the output ?

#===========================================================================================

# class Animal():
#     def __init__(self, type, number_legs, sound):
#         self.type = type
#         self.number_legs = number_legs
#         self.sound = sound

#     def make_sound(self):
#         print(f"I am an animal, and I love saying {self.sound}")

# class Dog(Animal):
#     def fetch_ball(self):
#         print("I am a dog, and I love fetching balls")

#     def make_sound(self):
#         print("I am an DOGGG !!! WOUAFFF!!")

# rex = Dog('dog', 4, "Wouaf")
# rex.make_sound()
# # >> I am an DOGGG !!! WOUAFFF!!
#=================================================================================================

# class Animal():
#     def __init__(self, type, number_legs, sound):
#         self.type = type
#         self.number_legs = number_legs
#         self.sound = sound

# class Dog(Animal):
#     def __init__(self, type, number_legs, sound, fetch_ball):
#         super().__init__(type, number_legs, sound)
#         # Or : Animal.__init__(self,type, number_legs, sound)
#         self.fetch_ball = fetch_ball

# rex = Dog('dog', 4, "wouaf", True)
# print('This animal is a:', rex.type)
# # >> This animal is a dog

# print('This dog has', rex.number_legs , ' legs')
# # >> This dog has 4 legs

# print('This dog makes the sound ', rex.sound)
# # >> This dog makes the sound wouaf

# print('Does this dog fetchs balls ? ', rex.fetch_ball)
# # >> Does this dog fetchs balls ? True
#==================================================================================================

# class Door:
#     def __init__(self, is_opened):
#         self.is_opened = is_opened

#     def open_door(self):
#         if self.is_opened == False:
#             print("The door is already open.")
#         else:
#             self.is_opened = True
#             print("The door is now open.")

#     def close_door(self):
#         if not self.is_opened == True:
#             print("the door is already closed.")
#         else:
#             self.is_opened = False
#             print("the door is now closed.")

# class BlockedDoor(Door):
#     def open_door(self):
#         print("Error: A blocked door cannot be opened.")

#     def close_door(self):
#         print("Error: A blocked door cannot be closed.")
#==========================================================================================
