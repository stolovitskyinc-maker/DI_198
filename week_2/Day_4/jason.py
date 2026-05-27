import json

my_family = {
    "parents":['Beth', 'Jerry'],
    "children":['Summer', 'Morty']
}

json_file = "my_file.json"

with open(json_file, 'w') as file_obj:
    json.dump(my_family, file_obj)
   #json.dump(obj2save , destination_file)

# json_string = json.dumps(my_family)

# print(json_string)


with open('my_file.json', 'r') as file_obj:
    my_family = json.load(file_obj)

print(my_family)