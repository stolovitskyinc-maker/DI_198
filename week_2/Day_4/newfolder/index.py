# Retrieve the data into the python file, inside a variable called family
# Print nicely the details about Jane's children
# Inside the family variable, add to each children, a key favorite_color with a value
# Then, save back all the new data into the json file
# Use the indent argument inside the dump function. Check out the documentation and the video in the Useful Resources
# Run the python file
import json


with open("file.json", 'r') as file:
    family = json.load(file)

for child in family["children"]:
    print(f"Name: {child['firstname']}")
    print(f'Age: {child['age']}')
    print()

colors = ["blue", "green"]

for child, color in zip(family["children"], colors):
    child["favorite_color"] = color

print(family)

with open("file.json", "w") as file:
    json.dump(family, file, indent=4)


