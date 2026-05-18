# Given this list:
list1 = [5, 10, 15, 20, 25, 50, 20]
# find the value 20 in the list, and if it is present, replace it with 200. Only update the first occurrence of a value

# list1[3] = 200
# print(list1)
if (20) in list1:
    first_index = list1.index(20)

    list1[first_index] = 200

    print(list1)