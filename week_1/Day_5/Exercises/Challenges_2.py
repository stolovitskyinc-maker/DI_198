# ==============================================================================
# Exercise 1
# Instructions
# Draw the following pattern using for loops:
#   *
#  ***
# *****
# 
# Draw the following pattern using for loops:
#     *
#    **
#   ***
#  ****
# *****
# 
# Draw the following pattern using for loops:
# *
# **
# ***
# ****
# *****
# *****
#  ****
#   ***
#    **
#     *
# ==============================================================================

print("--- Pattern 1 ---")
# Rows = 3. Each row needs (total rows - current row) spaces and (2 * current row - 1) stars.
for i in range(1, 4):
    print(" " * (3 - i) + "*" * (2 * i - 1))

print("\n--- Pattern 2 ---")
# Rows = 5. Each row needs (5 - current row) spaces and (current row) stars.
for i in range(1, 6):
    print(" " * (5 - i) + "*" * i)

print("\n--- Pattern 3 ---")
# Top half: 5 rows growing from 1 star to 5 stars.
for i in range(1, 6):
    print("*" * i)
# Bottom half: 5 rows shrinking from 5 stars to 1 star, padded with increasing spaces.
for i in range(5, 0, -1):
    print(" " * (5 - i) + "*" * i)


# ==============================================================================
# Exercise 2
# Instructions
# Analyse this code before executing it. Write some comments next to each line. 
# Write the value of each variable and their changes, and add the final output. 
# Try to understand the purpose of this program.
# my_list = [2, 24, 12, 354, 233]
# for i in range(len(my_list) - 1):
#     minimum = i
#     for j in range( i + 1, len(my_list)):
#         if(my_list[j] < my_list[minimum]):
#             minimum = j
#             if(minimum != i):
#                 my_list[i], my_list[minimum] = my_list[minimum], my_list[i]
# print(my_list)
# ==============================================================================

# --- CODE ANALYSIS & VARIABLES TRACE ---
# Purpose: This program implements a modified "Selection Sort" algorithm. Its goal is to sort the list in ascending order (smallest to largest).
# 
# Variable State Changes Trace Table:
# Iteration i=0: minimum=0. Inner loop j runs from 1 to 4. 
#   - Compare elements with my_list[0] (value 2). No elements are smaller than 2. 
#   - minimum stays 0. No swaps occur. List remains: [2, 24, 12, 354, 233]
# Iteration i=1: minimum=1. Inner loop j runs from 2 to 4.
#   - j=2: my_list[2] (12) < my_list[1] (24). minimum changes from 1 to 2.
#          Because minimum (2) != i (1), it immediately swaps index 1 and 2. 
#          List becomes: [2, 12, 24, 354, 233]
#   - j=3: my_list[3] (354) is not smaller than my_list[minimum] (now 24).
#   - j=4: my_list[4] (233) is not smaller than my_list[minimum] (24).
# Iteration i=2: minimum=2. Inner loop j runs from 3 to 4.
#   - j=3: my_list[3] (354) is not smaller than 24.
#   - j=4: my_list[4] (233) is not smaller than 24. No swaps occur.
# Iteration i=3: minimum=3. Inner loop j runs for 4.
#   - j=4: my_list[4] (233) < my_list[3] (354). minimum changes from 3 to 4.
#          Because minimum (4) != i (3), it swaps index 3 and 4.
#          List becomes: [2, 12, 24, 233, 354]
#
# Final Output: [2, 12, 24, 233, 354]

print("\n--- Exercise 2: Selection Sort Run ---")
my_list = [2, 24, 12, 354, 233]                 # Initializes an unsorted list of 5 integer items
for i in range(len(my_list) - 1):                # Outer loop; iterates index i from 0 up to 3 (stops before last item)
    minimum = i                                  # Tentatively assumes the current position i holds the smallest value
    for j in range(i + 1, len(my_list)):         # Inner loop; scans remaining unsorted items from index i+1 to 4
        if(my_list[j] < my_list[minimum]):       # Evaluates if the current item j is smaller than the recorded minimum
            minimum = j                          # Updates minimum tracking index to current index j
            if(minimum != i):                    # Checks if the found minimum index is different from starting index i
                # Swaps the items at index i and minimum to bring the smaller number forward
                my_list[i], my_list[minimum] = my_list[minimum], my_list[i]

print(my_list)                                   # Prints the final sorted list out to the terminal console
