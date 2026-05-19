first_name = 'Yaakov'
last_name = 'Stolovitsky'
country = 'Israel'
city = 'Kiryat Motzkin'
age = 32
is_married = False
skills = ['autocad', 'fusion360', 'CNC', 'lasercutting', 'Rihno', 'Photoshop', 'inventor', 'Python', 'Manufacturing Prep']
personal_info =  {
          'first_name': 'Yaakov',
          'last_name': 'Stolovitsky',
          'country': 'Israel',
          'city': 'Kiryat Motzkin',
          'age': 32,
          'is_married': False,
          'skills': ['autocad', 'fusion360', 'CNC', 'lasercutting', 'Rihno', 'Photoshop', 'inventor', 'Python', 'Manufacturing Prep']
}

print('first_name:', first_name)
print('first name length:', len(first_name))
print('last_name:', last_name)
print('last name length:', len(last_name))
print('Country: ', country)
print('Country length:', len(country))
print('City: ', city)
print('City length:', len(city))
print('Age: ', age)
print('Married: ', is_married)
print('Skills: ', skills)
print('Skills length:', len(skills))
print('Person information: ', personal_info)
print('Person information length:', len(personal_info))

# first_name, last_name = 'Yaakov', 'Stolovitsky'

# print(first_name, last_name)
# print('Country: ', country)
# print('Age: ', age)
# print('Married: ', is_married)

# print(type(first_name))
# print(type(last_name))
# print(type(country))
# print(type(city))
# print(type(age))
# print(type(is_married))
# print(type(skills))
# print(type(personal_info))

# print(len(first_name) == len(last_name))
# print(len(first_name) > len(last_name))
# print(len(first_name) < len(last_name))
# print(len(first_name) != len(last_name))
# print(len(first_name) + len(last_name))
# print(len(first_name) - len(last_name))
# print(len(first_name) * len(last_name))
# print(len(first_name) / len(last_name))
# print(len(first_name) % len(last_name))
# print(len(first_name) // len(last_name))
# print(len(first_name) ** len(last_name))

if len(first_name) > len(last_name):
    print(f"First name is longer by {len(first_name) - len(last_name)} characters.")
elif len(first_name) < len(last_name):
    print(f"Last name is longer by {len(last_name) - len(first_name)} characters.")
else:
    print("Both names have the same length.")

longest = max(len(first_name), len(last_name))
print(f"The longest name length is: {longest}")