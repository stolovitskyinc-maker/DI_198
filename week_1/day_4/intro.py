def say_hi():
    """takes a username and greets the user"""
    # The above docstring is better than a comment  
    name = input("What is your name?")
    print("hello, {name}!")

# say_hi()

# -
# for x in range(10)
#     say_hi()
# -

# f(x) = 2x -1

def f(x):
    print(2*x-1)

# f(9)

def greet_user(username):
    """greets a particular user"""
    print(f"Greetings, {username}, Welcome to the show.")

# no error
# greet_user("Ariel")

# error
#greet_user()

# error
# greet_user("ariel", "vasili")



def order_shawarma(size="pita"):
    # say_hi()
    options = ["pita", "laffa", "baguette"]
    if size not in options:
        print("Ordering a shawarma ${size}")
    else:
        print(f"Ordering a shawarma {size}")

# order_shawarma("pita")
# order_shawarma("laffa")
# order_shawarma()

def say_hello(username, language="EN"):
    if language == "EN":
        print("Hello "+username)
    elif language == "FR":
        print("Bonjour "+username)
    else:
        print("This language is not supported: " + language)

# say_hello("Rick", "FR")
# keyword argument = (kwarg)
# say_hello(language="FR", username="Rick")
# say_hello(6, "R", username="Rick")
# say_hello("Bobby", HE)
# say_hello("Rick")

name = "Nate"
def order_Pizza():
    name = "Bobby"
    print(f"{name} is order a pizza.")

# order_Pizza()
# print(name)


def double(num):
    return num *2
def add_ten(num):
    return num + 10
def square(num):
    return num ** 2

g = double(3) # 6
h = add_ten(g)
i = square(h)

# print(i)

# # equivalent
# print(square(add_ten(double(3))))

def quadratic():
    #doing math
    return 4, 5

# result = quadratic()

# print(result)

def get_formatted_name(first_name, last_name):
    """Return a full name, neatly formatted."""
    full_name = first_name + ' ' + last_name
    return full_name.title()

# musician = get_formatted_name('jimi', 'hendrix') 
# print(musician)
