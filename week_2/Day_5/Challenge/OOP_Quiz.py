# Class: A blueprint or template used to create objects. It defines the attributes (data) and methods (behaviors) that the objects will have.
# Instance: A specific object created from a class template. For example, if Dog is a class, a specific dog named Buddy is an instance.
# Encapsulation: Bundling data and methods together inside a class while hiding internal details. It protects data from direct external modification by using private attributes and public methods.
# Abstraction: Hiding complex implementation details and showing only the essential features to the user. It simplifies interacting with code by hiding the "how" behind a simple interface.
# Inheritance: A mechanism where a new class (child) adopts attributes and methods from an existing class (parent). This promotes code reuse.
# Multiple Inheritance: A feature where a class can inherit attributes and methods from more than one parent class.
# Polymorphism: The ability of different classes to respond to the same method call in their own specific way. It allows one interface to control multiple unique behaviors.
# Method Resolution Order (MRO): The definitive order in which Python searches for a method or attribute in a class hierarchy. This is especially critical for resolving conflicts in multiple inheritance.

import random

class Card:
    def __init__(self, suit, value):
        """Initializes a single playing card with a suit and value."""
        self.suit = suit
        self.value = value

    def __repr__(self):
        """Returns a user-friendly string representation of the card."""
        return f"{self.value} of {self.suit}"


class Deck:
    def __init__(self):
        """Initializes the deck by generating all 52 standard playing cards."""
        self.suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
        self.values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
        self.reset_deck()

    def reset_deck(self):
        """Helper method to rebuild a full, ordered 52-card deck."""
        self.cards = [Card(suit, value) for suit in self.suits for value in self.values]

    def shuffle(self):
        """Resets the deck to all 52 cards and randomly rearranges them."""
        self.reset_deck()
        random.shuffle(self.cards)
        print("The deck has been fully restored and shuffled.")

    def deal(self):
        """Removes and returns a single card from the deck. Returns None if empty."""
        if len(self.cards) == 0:
            print("No cards left in the deck!")
            return None
        return self.cards.pop()

#===================================================================================================================

# Create a new deck
my_deck = Deck()

# Shuffle the deck (ensures 52 cards are present and randomized)
my_deck.shuffle()

# Deal a couple of cards
card1 = my_deck.deal()
card2 = my_deck.deal()

print(f"Dealt card: {card1}")
print(f"Dealt card: {card2}")
print(f"Cards remaining in deck: {len(my_deck.cards)}")
