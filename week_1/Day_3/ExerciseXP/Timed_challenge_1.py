REverseinp = input() # Or use input() if you are on Python 3

# 1. Break the sentence down into a list of individual words
words = REverseinp.split()

# 2. Reverse the list of words using slicing [::-1]
reversed_words = words[::-1]

# 3. Join the reversed words back together into a single sentence string
reversed = " ".join(reversed_words)

print(reversed)
