const users = { user1: 18273, user2: 92833, user3: 90315 };

// Part 1: Turn the object into an array of entries
const updatedEntries = Object.entries(users).map(([user, id]) => [user, id * 2]);
    

console.log(updatedEntries);
// Output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

