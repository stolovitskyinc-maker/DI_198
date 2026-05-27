with open("nameslist.txt", "r") as file:
    for line in file:
        print(line.strip())

with open("nameslist.txt", "r") as file:
    first_five = file.read(5)
    print(first_five)

with open("nameslist.txt", "r") as file:
    names = file.read().splitlines()
letters = [list(name) for name in names]
print(letters[:5])

with open(f"nameslist.txt", "r") as file:
    all_names = file.read().splitlines()

print(f"Darth: {all_names.count('Darth')}")
print(f"Luke: {all_names.count('Luke')}")
print(f"Lea: {all_names.count('Lea')}")

my_name = "Yaakov"
with open("nameslist.txt", "a") as file:
    file.write(f"\n{my_name}")
print(f"Successfully appended '{my_name}' to the file.")

with open("nameslist.txt", "r") as file:
    contents = file.read()

updated_content = contents.replace("Luke", "Luke SkyWalker")

with open("nameslist.txt", "w") as file:
    file.write(updated_content)
print("successfully modified all intances of 'Luke to Luke Skywalker'.")