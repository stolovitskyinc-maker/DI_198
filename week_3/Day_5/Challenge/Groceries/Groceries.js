let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
};

// 1. Arrow function to display fruits
const displayGroceries = () => {
    groceries.fruits.forEach(fruit => console.log(fruit));
};

// 2. Arrow function to clone and modify variables
const cloneGroceries = () => {
    // Copy client to user
    let user = client;
    
    // Change client to "Betty"
    client = "Betty";
    // Question: Will we see this modification in the user variable?
    // Answer: No. (Explanation below)

    // Create shopping variable equal to groceries
    let shopping = groceries;

    // Change totalPrice to "35$"
    groceries.totalPrice = "35$";
    // Question: Will we see this modification in the shopping object?
    // Answer: Yes. (Explanation below)

    // Change paid to false
    groceries.other.paid = false;
    // Question: Will we see this modification in the shopping object?
    // Answer: Yes. (Explanation below)
    
    // Optional logs to verify the results in your console:
    console.log("client:", client);
    console.log("user:", user);
    console.log("shopping totalPrice:", shopping.totalPrice);
    console.log("shopping paid status:", shopping.other.paid);
};

// 3. Invoke the function
cloneGroceries();
