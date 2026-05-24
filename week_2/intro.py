# class Dog:
#     pass

# Winter = Dog()

# Winter.color = "black"
# Winter.name = "Winter Stolo"

# print(Winter)
# print(Winter.color)
# print(Winter.name)

class Dog:
    def __init__(self, name, color):
        print("you made a dog!")
        self.name = name
        self.color = color


    def speak(self):
        print(f"{self.name} BowWows!!")

    def introduce(self):
        print(f"Greetings human! My name is {self.name}!")

    def feed(self, treat):
        print(f"I fed {self.name} a {treat}!")

Winter = Dog("Winter", "Black")

print(Winter.color)
Winter.color = "Black"
print(Winter.color)

Winter.speak()

Winter.introduce()

Winter.feed("bone")

