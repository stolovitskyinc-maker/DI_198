x = int(input('Enter the Number:')) 

# 1. Initialize a variable to track the sum of divisors
divisor_sum = 0

# 2. Loop through all numbers from 1 up to (but not including) x
for i in range(1, x):
    # If x is perfectly divisible by i with no remainder, i is a divisor
    if x % i == 0:
        divisor_sum += i

# 3. Check if the sum of divisors equals the original number
if divisor_sum == x:
    print(True)
else:
    print(False)
