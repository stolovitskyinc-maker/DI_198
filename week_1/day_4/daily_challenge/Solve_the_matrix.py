# The Input Matrix String
MATRIX_STR = """
7ir
Tsi
h%x
i ?
sM# 
$a 
#t%"""

lines = [line for line in MATRIX_STR.split("\n") if line]
matrix = [list(line) for line in lines]

num_rows = len(matrix)
num_cols = len(matrix[0]) if num_rows > 0 else 0

column_chars = []
for col in range(num_cols):
    for row in range(num_rows):
        column_chars.append(matrix[row][col])

decoded_message = ""
symbol_seen = False

for char in column_chars:
    if char.isalpha():

        if decoded_message and symbol_seen:
            decoded_message += " "

        decoded_message += char
        symbol_seen = False 
    else:

        if decoded_message:
            symbol_seen = True

print(decoded_message)
