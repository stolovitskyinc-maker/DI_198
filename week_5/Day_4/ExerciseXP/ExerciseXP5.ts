// 1. Base Interface with Readonly Property
interface User {
    readonly id: number;
    name: string;
    email: string;
}

// 2. Extending the Interface with an Optional Property
interface PremiumUser extends User {
    membershipLevel?: string; // Optional property using '?'
}

// 3. Function to Accept and Log PremiumUser Details
function printUserDetails(user: PremiumUser): void {
    console.log(`ID: ${user.id}`);
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
    
    // Check if the optional property exists before printing
    if (user.membershipLevel) {
        console.log(`Membership: ${user.membershipLevel}`);
    } else {
        console.log("Membership: Standard / None");
    }
}

// Test Case 1: PremiumUser with membershipLevel provided
const vipUser: PremiumUser = {
    id: 1,
    name: "Alice Smith",
    email: "alice@example.com",
    membershipLevel: "Gold"
};
printUserDetails(vipUser);

// Test Case 2: PremiumUser without membershipLevel (allowed because it's optional)
const regularPremiumUser: PremiumUser = {
    id: 2,
    name: "Bob Jones",
    email: "bob@example.com"
};
printUserDetails(regularPremiumUser);

// 4. Verification of Readonly property
// vipUser.id = 99; 
// TS Error: Cannot assign to 'id' because it is a read-only property.
