# ==============================================================================
# Instructions
# Here is a python code that generates a list of 20000 random numbers, called 
# list_of_numbers, and a target number.
# 
# import random
# 
# list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]
# 
# target_number   = 3728
# 
# Copy this code, and create a program that finds, within list_of_numbers all 
# the pairs of number that sum to the target number
# 
# For example
# 1000 and 2728 sums to the target_number 3728
# 1864 and 1864 sums to the target_number 3728
# ==============================================================================

import random

list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]
target_number   = 3728

# --- Pair Finding Logic (Using a Hash Set for Maximum Speed) ---
# Tracking visited numbers in a set allows us to find pairs in a single pass.
# This prevents our code from slowing down or freezing over 20,000 items.
seen_numbers = set()
found_pairs = set()

for number in list_of_numbers:
    # Calculate what matching number we need to hit the exact target sum
    complement = target_number - number
    
    # If the complement exists in our set, we found a valid pair match
    if complement in seen_numbers:
        # Store the pairs in a sorted tuple layout to eliminate duplicate display orders
        # For example, keeping (1000, 2728) prevents also printing (2728, 1000)
        pair = (min(number, complement), max(number, complement))
        found_pairs.add(pair)
        
    # Mark the current item as seen for subsequent loop iterations
    seen_numbers.add(number)

# --- Print Results ---
print(f"Target Number: {target_number}\n")
print(f"Found {len(found_pairs)} unique pairs that add up to the target:")

for pair in sorted(found_pairs):
    print(f"{pair[0]} and {pair[1]} sums to the target_number {target_number}")
