class Product {
    // 1. Property Declarations
    public readonly id: number;
    public name: string;
    public price: number;

    // 2. Constructor to Initialize Properties
    constructor(id: number, name: string, price: number) {
        this.id = id; // Allowed: Initialization inside the constructor
        this.name = name;
        this.price = price;
    }

    // 3. Method to Return Product Info
    public getProductInfo(): string {
        return `Product: ${this.name}, Price: $${this.price}`;
    }
}

// Test the functionality
const laptop = new Product(101, "Laptop", 999);
console.log(laptop.getProductInfo()); // Output: Product: Laptop, Price: $999

// 4. Attempting to modify the readonly property
// laptop.id = 202; 
// TS Error: Cannot assign to 'id' because it is a read-only property.
