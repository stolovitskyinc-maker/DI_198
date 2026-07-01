# Given the following values:

x = 5
y = 10
z = 0
word1 = "hello"
word2 = "world"

# 1. Check if x is less than y and y is greater than z.
if (x) < (y) and (y) > (z):
    print(True)
else: 
    print(False)
# 2. Verify if word1 is not equal to word2.
if word1 == word2:
    print(True)
elif word1 != word2:
    print(False)
# 3. Use the bool() function to check the boolean value of z and word1.
bool_z = bool(z)
bool_word1 = bool(word1)

print(bool_z)
print(bool_word1)
