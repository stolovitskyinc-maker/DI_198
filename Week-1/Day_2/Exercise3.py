num = int(input("enter a number:"))
print(f"\nMultiplication Table for {num}:")

for i in range(11):
    result = num * i

    print(f"{num} * i = {result}")
