function keysAndValues(obj) {
    // 1. Get the keys and sort them alphabetically
    const sortedKeys = Object.keys(obj).sort();
    
    // 2. Map through the sorted keys to get their corresponding values
    const correspondingValues = sortedKeys.map(key => obj[key]);
    
    // 3. Return both as a nested array
    return [sortedKeys, correspondingValues];
}

// --- Test Cases ---
console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
// Output: [["a", "b", "c"], [1, 2, 3]]

console.log(keysAndValues({ c: "Google", b: "Microsoft", a: "Apple" }));
// Output: [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

console.log(keysAndValues({ key3: undefined, key1: true, key2: false }));
// Output: [["key1", "key2", "key3"], [true, false, undefined]]
