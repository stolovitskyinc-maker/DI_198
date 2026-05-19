sample_dict = {
  "name": "Kelly",
  "age":25,
  "salary": 8000,
  "city": "New york"

}
keys_to_remove = ["name", "salary"]

# del sample_dict["name"]
# del sample_dict["salary"]

# print(sample_dict)

for key in keys_to_remove:
    sample_dict.pop(key, None)

print(sample_dict)
