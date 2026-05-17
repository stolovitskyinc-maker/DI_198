# Working with the following string:
description = "strings are..."

# make it all uper case
description_upper = description.upper()
# replace the word "are" to "is"
description_replace = description.replace('is', 'are')
# print just the word "strings"
description_strings = description.replace('are...', '')

print(description_upper)
print(description_replace)
print(description_strings)
