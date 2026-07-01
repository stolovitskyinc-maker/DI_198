# ==============================================================================
# Exercise 1
# Instructions
# Write a script that inserts an item at a defined index in a list.
# ==============================================================================

# Custom function mimicking the built-in .insert() list technique
def insert_item(target_list, index, item):
    # Using slice assignment to place the item directly at the index location
    target_list[index:index] = [item]
    return target_list

# Test demonstration
sample_list = [1, 2, 4, 5]
print("Exercise 1 Output:", insert_item(sample_list, 2, 3))


# ==============================================================================
# Exercise 2
# Instructions
# Write a script that counts the number of spaces in a string.
# ==============================================================================

def count_spaces(text):
    space_count = 0
    for char in text:
        if char == " ":
            space_count += 1
    return space_count

# Test demonstration
print("Exercise 2 Output:", count_spaces("Hello World from Python"))


# ==============================================================================
# Exercise 3
# Instructions
# Write a script that calculates the number of upper case letters and lower case letters in a string.
# ==============================================================================

def count_case(text):
    upper_count = 0
    lower_count = 0
    for char in text:
        if char.isupper():
            upper_count += 1
        elif char.islower():
            lower_count += 1
    return f"Upper case: {upper_count}, Lower case: {lower_count}"

# Test demonstration
print("Exercise 3 Output:", count_case("Hello Python 3!"))


# ==============================================================================
# Exercise 4
# Instructions
# Write a function to find the sum of an array without using the built in function:
# >>>my_sum([1,5,4,2])
# >>>12
# ==============================================================================

def my_sum(numbers):
    total = 0
    for num in numbers:
        total += num
    return total

# Test demonstration
print("Exercise 4 Output:", my_sum([1, 5, 4, 2]))


# ==============================================================================
# Exercise 5
# Instructions
# Write a function to find the max number in a list
# >>>find_max([0,1,3,50])
# >>>50
# ==============================================================================

def find_max(numbers):
    if not numbers:
        return None
    # Initialize max value using the very first element
    max_val = numbers[0]
    for num in numbers:
        if num > max_val:
            max_val = num
    return max_val

# Test demonstration
print("Exercise 5 Output:", find_max([0, 1, 3, 50]))


# ==============================================================================
# Exercise 6
# Instructions
# Write a function that returns factorial of a number
# >>>factorial(4)
# >>>24
# ==============================================================================

def factorial(n):
    if n < 0:
        return None
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result

# Test demonstration
print("Exercise 6 Output:", factorial(4))


# ==============================================================================
# Exercise 7
# Instructions
# Write a function that counts an element in a list (without using the count method):
# >>>list_count(['a','a','t','o'],'a')
# >>>2
# ==============================================================================

def list_count(target_list, target_item):
    occurrences = 0
    for item in target_list:
        if item == target_item:
            occurrences += 1
    return occurrences

# Test demonstration
print("Exercise 7 Output:", list_count(['a', 'a', 't', 'o'], 'a'))


# ==============================================================================
# Exercise 8
# Instructions
# Write a function that returns the L2-norm (square root of the sum of squares) of the sum of a list:
# >>>norm([1,2,2])
# >>>3
# ==============================================================================

def norm(numbers):
    sum_of_squares = 0
    for num in numbers:
        sum_of_squares += num ** 2
    # Exponentiation to 0.5 computes the square root mathematically
    return int(sum_of_squares ** 0.5)

# Test demonstration
print("Exercise 8 Output:", norm([1, 2, 2]))


# ==============================================================================
# Exercise 9
# Instructions
# Write a function to find if an array is monotonic (sorted either ascending of descending)
# >>>is_mono([7,6,5,5,2,0])
# >>>True
# >>>is_mono([2,3,3,3])
# >>>True
# >>>is_mono([1,2,0,4])
# >>>False
# ==============================================================================

def is_mono(alist):
    increasing = True
    decreasing = True
    
    for i in range(len(alist) - 1):
        if alist[i] > alist[i + 1]:
            increasing = False
        if alist[i] < alist[i + 1]:
            decreasing = False
            
    return increasing or decreasing

# Test demonstration
print("Exercise 9 (Mono):", is_mono([7, 6, 5, 5, 2, 0]))
print("Exercise 9 (Non-Mono):", is_mono([1, 2, 0, 4]))


# ==============================================================================
# Exercise 10
# Instructions
# Write a function that prints the longest word in a list.
# ==============================================================================

def print_longest_word(word_list):
    if not word_list:
        return
    longest = word_list[0]
    for word in word_list:
        if len(word) > len(longest):
            longest = word
    print(longest)

# Test demonstration
print("Exercise 10 Output: ", end="")
print_longest_word(["apple", "banana", "watermelon", "cherry"])


# ==============================================================================
# Exercise 11
# Instructions
# Given a list of integers and strings, put all the integers in one list, and all the strings in another one.
# ==============================================================================

def separate_types(mixed_list):
    integers_list = []
    strings_list = []
    
    for element in mixed_list:
        if isinstance(element, int) and not isinstance(element, bool):
            integers_list.append(element)
        elif isinstance(element, str):
            strings_list.append(element)
            
    return integers_list, strings_list

# Test demonstration
ints, strs = separate_types([1, "hello", 2, "world", 99, "python"])
print(f"Exercise 11 Output: Integers: {ints} | Strings: {strs}")


# ==============================================================================
# Exercise 12
# Instructions
# Write a function to check if a string is a palindrome:
# >>>is_palindrome('radar')
# >>>True
# >>>is_palindrome('John)
# >>>False
# ==============================================================================

def is_palindrome(text):
    # Standardize string format by converting characters to uniform lowercase
    clean_text = text.lower()
    return clean_text == clean_text[::-1]

# Test demonstration
print("Exercise 12 (Radar):", is_palindrome('radar'))
print("Exercise 12 (John):", is_palindrome('John'))


# ==============================================================================
# Exercise 13
# Instructions
# Write a function that returns the amount of words in a sentence with length > k:
# >>>sentence = 'Do or do not there is no try'
# >>>k=2
# >>>sum_over_k(sentence,k)
# >>>3
# ==============================================================================

def sum_over_k(sentence, k):
    words = sentence.split()
    count = 0
    for word in words:
        if len(word) > k:
            count += 1
    return count

# Test demonstration
sentence = 'Do or do not there is no try'
print("Exercise 13 Output:", sum_over_k(sentence, 2))


# ==============================================================================
# Exercise 14
# Instructions
# Write a function that returns the average value in a dictionary (assume the values are numeric):
# >>>dict_avg({'a': 1,'b':2,'c':8,'d': 1})
# >>>3
# ==============================================================================

def dict_avg(target_dict):
    if not target_dict:
        return 0
    total_sum = 0
    for value in target_dict.values():
        total_sum += value
    return int(total_sum / len(target_dict))

# Test demonstration
print("Exercise 14 Output:", dict_avg({'a': 1, 'b': 2, 'c': 8, 'd': 1}))


# ==============================================================================
# Exercise 15
# Instructions
# Write a function that returns common divisors of 2 numbers:
# >>>common_div(10,20)
# >>>[2,5,10]
# ==============================================================================

def common_div(num1, num2):
    divisors = []
    # Find the smaller bounds cap target since common divisors cannot exceed it
    smaller = num1 if num1 < num2 else num2
    
    # Starting from 2 as demonstrated by example output
    for i in range(2, smaller + 1):
        if num1 % i == 0 and num2 % i == 0:
            divisors.append(i)
    return divisors

# Test demonstration
print("Exercise 15 Output:", common_div(10, 20))


# ==============================================================================
# Exercise 16
# Instructions
# Write a function that test if a number is prime:
# >>>is_prime(11)
# >>>True
# ==============================================================================

def is_prime(num):
    if num <= 1:
        return False
    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            return False
    return True

# Test demonstration
print("Exercise 16 Output:", is_prime(11))


# ==============================================================================
# Exercise 17
# Instructions
# Write a function that prints elements of a list if the index and the value are even:
# >>>weird_print([1,2,2,3,4,5])
# >>>[2,4]
# ==============================================================================

def weird_print(alist):
    result = []
    for index in range(len(alist)):
        if index % 2 == 0 and alist[index] % 2 == 0:
            result.append(alist[index])
    print(result)

# Test demonstration
print("Exercise 17 Output: ", end="")
weird_print([1, 2, 2, 3, 4, 5])


# ==============================================================================
# Exercise 18
# Instructions
# Write a function that accepts an undefined number of keyworded arguments and return the count of different types:
# >>>type_count(a=1,b='string',c=1.0,d=True,e=False)
# >>>int: 1, str:1 , float:1, bool:2
# ==============================================================================

def type_count(**kwargs):
    counts = {"int": 0, "str": 0, "float": 0, "bool": 0}
    
    for value in kwargs.values():
        # In Python, booleans are subclasses of integers, so track bool check first
        if isinstance(value, bool):
            counts["bool"] += 1
        elif isinstance(value, int):
            counts["int"] += 1
        elif isinstance(value, str):
            counts["str"] += 1
        elif isinstance(value, float):
            counts["float"] += 1
            
    return f"int: {counts['int']}, str: {counts['str']}, float: {counts['float']}, bool: {counts['bool']}"

# Test demonstration
print("Exercise 18 Output:", type_count(a=1, b='string', c=1.0, d=True, e=False))


# ==============================================================================
# Exercise 19
# Instructions
# Write a function that mimics the builtin .split() method for strings.
# By default the function uses whitespace but it should be able to take an argument for any character and split with that argument.
# ==============================================================================

def my_split(text, delimiter=None):
    result = []
    current_segment = ""
    
    # Default split condition matches any variable length continuous whitespace sequence
    if delimiter is None:
        for char in text:
            if char in [" ", "\t", "\n"]:
                if current_segment:
                    result.append(current_segment)
                    current_segment = ""
            else:
                current_segment += char
        if current_segment:
            result.append(current_segment)
            
    # Handle single explicit separation character delimiter
    else:
        for char in text:
            if char == delimiter:
                result.append(current_segment)
                current_segment = ""
            else:
                current_segment += char
        result.append(current_segment)
        
    return result

# Test demonstration
print("Exercise 19 (Default):", my_split("Hello world splitting logic"))
print("Exercise 19 (Delimiter):", my_split("apple,banana,orange", ","))


# ==============================================================================
# Exercise 20
# Instructions
# Convert a string into password format.
# Example:
# input : "mypassword"
# output: "***********"
# ==============================================================================

def make_password_format(text):
    return "*" * len(text)

# Test demonstration
print("Exercise 20 Output:", make_password_format("mypassword"))
