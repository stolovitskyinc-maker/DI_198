# Instructions
# Create a class called Phone. This class takes a parameter called phone_number. 
# When instantiating an object create an attribute called call_history which value is an empty list.
# Add a method called call that takes both self and other_phone as parameters. 
# The method should print a string stating who called who, and add this string to the phone’s call_history.
# Add a method called show_call_history. This method should print the call_history.
# Add another attribute called messages to your __init__() method which value is an empty list.
# Create a method called send_message which is similar to the call method. 
# Each message should be saved as a dictionary with the following keys: to, from, content
# Create the following methods: show_outgoing_messages(self), show_incoming_messages(self), show_messages_from(self)
# Test your code !!!

class Phone:
    def __init__(self, phone_number):
        self.phone_number = phone_number
        self.call_history = []
        self.messages = []

    def call(self, other_phone):
        call_log = f"{self.phone_number} called {other_phone.phone_number}"
        print(call_log)
        
        # Save to call history for both phones
        self.call_history.append(call_log)
        other_phone.call_history.append(call_log)

    def show_call_history(self):
        print(f"\n--- Call History for {self.phone_number} ---")
        for log in self.call_history:
            print(log)

    def send_message(self, other_phone, content):
        message_packet = {
            "to": other_phone.phone_number,
            "from": self.phone_number,
            "content": content
        }
        
        # Save the message record to both phones
        self.messages.append(message_packet)
        other_phone.messages.append(message_packet)
        print(f"Message sent from {self.phone_number} to {other_phone.phone_number}")

    def show_outgoing_messages(self):
        print(f"\n--- Outgoing Messages from {self.phone_number} ---")
        for msg in self.messages:
            if msg["from"] == self.phone_number:
                print(f"To: {msg['to']} | Content: {msg['content']}")

    def show_incoming_messages(self):
        print(f"\n--- Incoming Messages to {self.phone_number} ---")
        for msg in self.messages:
            if msg["to"] == self.phone_number:
                print(f"From: {msg['from']} | Content: {msg['content']}")

    def show_messages_from(self, other_phone):
        print(f"\n--- Messages from {other_phone.phone_number} to {self.phone_number} ---")
        for msg in self.messages:
            if msg["from"] == other_phone.phone_number and msg["to"] == self.phone_number:
                print(f"Content: {msg['content']}")


# --- Test your code !!! ---

# Step 1: Instantiate Phone objects
phone_a = Phone("123-4567")
phone_b = Phone("987-6543")
phone_c = Phone("555-0000")

# Step 2: Test Call System
print("--- Testing Calls ---")
phone_a.call(phone_b)
phone_b.call(phone_c)

phone_a.show_call_history()
phone_b.show_call_history()

# Step 3: Test Message System
print("\n--- Testing Messages ---")
phone_a.send_message(phone_b, "Hey! Are we still meeting today?")
phone_b.send_message(phone_a, "Yes, see you at 5!")
phone_c.send_message(phone_a, "Wrong number, sorry.")

# Step 4: Test Message Filters
phone_a.show_outgoing_messages()
phone_a.show_incoming_messages()
phone_a.show_messages_from(phone_b)
