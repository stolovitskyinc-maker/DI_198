// ------ 1 ------
// Output: ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']
// Analysis: The spread operator (...) unpacks the elements of the vegetables and fruits arrays directly inside the new array literal in their sequential order.

// ------ 2 ------
// Output: ['U', 'S', 'A']
// Analysis: Strings are iterable objects. Spreading a string breaks it down into an array of its individual characters.

// ------ Bonus ------
// Output: [undefined, undefined]
// Analysis: [,,] creates an array with two empty slots (a sparse array of length 2). Spreading it inside a new array literal forces JavaScript to convert those empty, uninitialized slots into explicit undefined values.