# my_books = {
#   "title": "Harry Potter",
#   "author": "JK Rowling",
# }

# for x, y in my_books.items():
#     print("the" + x + "is" + y)

# my_list = ['a', 'b', 'c', 'd']

# for i,j in enumerate(my_list):
#     print(f"Ther index {i} is valued {j}")

# list1 = [1,2,3]
# list2 = ['a','b','c']
# list3 = [1.1, 2.2, 3.3, 4.4, 5.5]

# for item in zip(list1, list2, list3): # only go as far it is possible
#     print(item)

# for i in range(1, 3):
#     print(i)
# else:
#     print('The for loop is over')

# x = 0
# while x < 2:
#     print(f'x is {x}')
#     x += 1
# else:
#     print('x is bigger than 2')

# for item in [1,2,3]:
#     # comment
#     pass # to avoid the error

# print('Finish the script')

# for letter in 'Leonardo':
#     if letter == 'a':
#         break
#     print(letter, end='') # end='' renders each letter next to the other

# while True:
#     s = input('Enter something : ')
#     if s == 'quit':
#         break
#     if len(s) < 3:
#         print('Too small')
#         continue
#     print('Input is of sufficient length')

# numbers = [1, 2, 3, 4, 5]

# numbers_comp = [number * 2 for number in numbers]

# print(numbers_comp)

# The basic way of appending an element into a list with Nested Loop
# my_list = []

# for i in [2, 3, 4]:
#     for j in [100, 200, 300]:
#         my_list.append(i*j)

# print(my_list)

# D. The list comprehension way
# my_list = []
# my_list = [(i*j) for i in [2, 3, 4] for j in [100, 200, 300]]
# print(my_list)

