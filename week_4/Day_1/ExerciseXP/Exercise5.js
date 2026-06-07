const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// Combine all elements into a single string spaced correctly
const sentence = epic.reduce((accumulator, currentWord) => {
    return `${accumulator} ${currentWord}`;
});

console.log(sentence); // Output: "a long time ago in a galaxy far far away"
