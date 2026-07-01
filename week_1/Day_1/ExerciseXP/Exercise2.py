# print((99 ** 3) * 8)
# my_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

# print(len(my_text))

record_length = 0

while True:
    # Get the sentence and remove accidental whitespace at the ends
    sentence = input("Enter the longest sentence you can without the letter 'A': ").strip()
    
    # Check if the sentence contains 'A' or 'a'
    if "a" in sentence.lower():
        print("Game Over! That sentence contains the letter 'A'.\n")
        break
        
    current_length = len(sentence)
    
    # Check if the user beat their previous record
    if current_length > record_length:
        record_length = current_length
        print(f"🎉 Congratulations! New record set with {record_length} characters!\n")
    else:
        print(f"Valid sentence ({current_length} chars), but it didn't beat your record of {record_length}.\n")