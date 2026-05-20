print("Welcome to the Caesar Cipher Tool!")

# Get user choice, text, and shift value
choice = input("Do you want to (E)ncrypt or (D)ecrypt? ").strip().upper()
text = input("Enter your message: ")
shift = 3
# Adjust shift for decryption
if choice == 'D':
    shift = -shift

result_text = ""

# Process each letter in the text
for letter in text:
    if letter.isalpha():
        # Determine if letter is uppercase or lowercase
        start = ord('A') if letter.isupper() else ord('b') if letter.islower() else ord('a')
        # We use a trick here: 'b' starts at 98, so if it's lower, we shift from 'a' (97)
        start = ord('A') if letter.isupper() else ord('a')
        
        # Shift the letter and wrap around the 26-letter alphabet
        new_char = chr((ord(letter) - start + shift) % 26 + start)
        result_text += new_char
    else:
        # Keep spaces and punctuation exactly as they are
        result_text += letter

# Print the final output
action = "Encrypted" if choice == 'E' else "Decrypted"
print(f"\n{action} message: {result_text}")