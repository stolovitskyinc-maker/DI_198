# Instructions
# The goal is to create a class that represents a simple circle.
# A Circle can be defined by either specifying the radius or the diameter - use a decorator for it.
# The user can query the circle for either its radius or diameter.
#
# Abilities of a Circle Instance
# Your Circle class should be able to:
# ✅ Compute the circle’s area.
# ✅ Print the attributes of the circle — use a dunder method (__str__ or __repr__).
# ✅ Add two circles together and return a new circle with the new radius — use a dunder method (__add__).
# ✅ Compare two circles to see which is bigger — use a dunder method (__gt__).
# ✅ Compare two circles to check if they are equal — use a dunder method (__eq__).
# ✅ Store multiple circles in a list and sort them — implement __lt__ or other comparison methods.

import math

class Circle:
    def __init__(self, radius):
        self.radius = radius

    @classmethod
    def from_diameter(cls, diameter):
        # Alternative constructor using classmethod decorator
        return cls(diameter / 2)

    @property
    def diameter(self):
        return self.radius * 2

    @diameter.setter
    def diameter(self, value):
        self.radius = value / 2

    @property
    def area(self):
        return math.pi * (self.radius ** 2)

    def __repr__(self):
        return f"Circle(radius={self.radius})"

    def __str__(self):
        return f"Circle with Radius: {self.radius}, Diameter: {self.diameter}, Area: {self.area:.2f}"

    def __add__(self, other):
        if isinstance(other, Circle):
            return Circle(self.radius + other.radius)
        return NotImplemented

    def __eq__(self, other):
        if isinstance(other, Circle):
            return self.radius == other.radius
        return False

    def __lt__(self, other):
        if isinstance(other, Circle):
            return self.radius < other.radius
        return NotImplemented

    def __gt__(self, other):
        if isinstance(other, Circle):
            return self.radius > other.radius
        return NotImplemented

# --- Demonstration of Abilities ---
if __name__ == "__main__":
    # Create instances using radius or diameter
    c1 = Circle(4)
    c2 = Circle.from_diameter(10)
    
    # Compute area & print attributes
    print(c1)
    print(f"c2 Area: {c2.area:.2f}")

    # Add two circles
    c3 = c1 + c2
    print(f"c3 (c1 + c2): {c3}")

    # Compare circles
    print(f"Is c2 bigger than c1? {c2 > c1}")
    print(f"Is c1 equal to a new circle with radius 4? {c1 == Circle(4)}")

    # Store and sort a list of circles
    circle_list = [Circle(15), Circle(3), Circle(8), Circle(1)]
    circle_list.sort()
    print(f"Sorted circles: {circle_list}")

# Bonus Challenge (Optional)
# Install the Turtle module (pip install PythonTurtle)
# Draw the sorted circles visually on the screen!

import turtle

def draw_circles(sorted_circles):
    # Setup screen
    screen = turtle.Screen()
    screen.title("Visualizing Sorted Circles")
    
    # Setup drawer pen
    pen = turtle.Turtle()
    pen.speed(3)
    
    # Move start position to the left side of the screen
    pen.penup()
    pen.goto(-200, 0)
    
    for circle in sorted_circles:
        # Scale up radius size for better visual display on screen
        display_radius = circle.radius * 5 
        
        # Move down by the radius size to draw from bottom up
        pen.goto(pen.xcor(), -display_radius)
        pen.pendown()
        pen.circle(display_radius)
        pen.penup()
        
        # Move forward past the diameter plus padding for the next circle
        pen.goto(pen.xcor() + (display_radius * 2) + 20, 0)

    screen.mainloop()

# Example execution with the sorted list from above:
# draw_circles(circle_list)
