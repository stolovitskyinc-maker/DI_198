# Question 1.
user_input = input("Enter a string that is exactly 10 characters long: ")
#Question 2.
if len(user_input) < 10:
    print("String not long enough.")
elif len(user_input) > 10:
    print("String too long.")
else:
    print("Perfect string")
    print("-" * 20)  # Visual separator
    print(f"First character: {user_input[0]}")
    print(f"Last character: {user_input[-1]}")
    print("-" * 20)
    #Question 3.
    print(f"First character: {user_input[0]}")
    print(f"Last character: {user_input[-1]}")
    print("-" * 20)
    #Question 4.
    current_string = ""
    for char in user_input:
        current_string += char
        print(current_string)
    print("-" * 20)
    #Question 5.
    char_list = list(user_input)
    random.shuffle(char_list)
    jumbled_string = "".join(char_list)
    print(f"Jumbled string: {jumbled_string}")