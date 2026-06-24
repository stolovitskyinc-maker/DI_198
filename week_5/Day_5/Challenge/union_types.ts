// 1. Define the required types
type User = {
  type: 'user';
  name: string;
  age: number;
};

type Product = {
  type: 'product';
  id: number;
  price: number;
};

type Order = {
  type: 'order';
  orderId: string;
  amount: number;
};

// Create a union type for the allowed data items
type DataItem = User | Product | Order;

// 2. Create the processing function
function handleData(data: DataItem[]): string[] {
  // Map over the array to process each item individually
  return data.map((item) => {
    
    // Type Guard utilizing the literal 'type' property
    switch (item.type) {
      case 'user':
        // The compiler now knows 'item' is strictly a User object
        return `Hello, ${item.name}! You are ${item.age} years old.`;
        
      case 'product':
        // The compiler now knows 'item' is strictly a Product object
        return `Product ID #${item.id} costs $${item.price.toFixed(2)}.`;
        
      case 'order':
        // The compiler now knows 'item' is strictly an Order object
        return `Order summary: ID ${item.orderId} totaling $${item.amount.toFixed(2)}.`;
        
      default:
        // 3. Gracefully handle unexpected runtime values or future types
        const _exhaustiveCheck: never = item;
        return `Unknown data type encountered.`;
    }
  });
}

// 🧪 Test Cases
const mixedData: DataItem[] = [
  { type: 'user', name: 'Sarah', age: 28 },
  { type: 'product', id: 9102, price: 49.99 },
  { type: 'order', orderId: 'ORD-776X', amount: 150.50 },
  { type: 'user', name: 'Alex', age: 34 }
];

const results = handleData(mixedData);
console.log(results);
/* 
Output:
[
  "Hello, Sarah! You are 28 years old.",
  "Product ID #9102 costs $49.99.",
  "Order summary: ID ORD-776X totaling $150.50.",
  "Hello, Alex! You are 34 years old."
]
*/
