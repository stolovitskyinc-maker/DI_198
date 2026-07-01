# Check what is the type of each value, then change it: if it is a string, make it an integer and vice-versa:

bank_balance = '33000'
phone_number = 532287514

if type(bank_balance) is str:
    bank_balance = int(bank_balance)
elif type(bank_balance) is int:
    bank_balance = str(bank_balance)

if type(phone_number) is str:
    phone_number = int(phone_number)
elif type(phone_number) is int:
    phone_number = str(phone_number)

print(bank_balance)
print(phone_number)