// Define the base types
type Person = {
  name: string;
  age: number;
};

type Address = {
  street: string;
  city: string;
};

// Combine them using the & operator
type PersonWithAddress = Person & Address;

// Create a variable containing all properties
const user: PersonWithAddress = {
  name: "Alice",
  age: 30,
  street: "123 Main St",
  city: "Techville"
};
