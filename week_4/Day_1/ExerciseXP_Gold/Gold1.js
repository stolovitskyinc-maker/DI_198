// Exercise 1 : Analyzing the map method
// [1, 2, 3].map(num => {
//   if (typeof num === 'number') return num * 2;
//   return ;
// });

[2, 4, 6]

// =====================================================

// Exercise 2: Analyzing the reduce method
// [[0, 1], [2, 3]].reduce(
//   (acc, cur) => {
//     return acc.concat(cur);
//   },
//   [1, 2],
// );

[1, 2, 0, 1, 2, 3]

// =========================================================

// Exercise 3 : Analyze this code
// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
//     console.log(num, i);
//     alert(num);
//     return num * 2;
// })

On the 1st loop (value 1), i is 0
On the 2nd loop (value 2), i is 1
On the 3rd loop (value 4), i is 2
On the 4th loop (value 5), i is 3
On the 5th loop (value 8), i is 4
On the 6th loop (value 9), i is 5

// ==========================================================

// Exercise 4 : Nested arrays

// 1. Flattening arrays to one level
const array = [[1],[2],[3],[[[4]]],[[[5]]]];
const flatArray = array.flatMap(num => num); 
console.log(flatArray); // Output: [1, 2, 3, [4], [5]]

// 2. Joining inner array elements into sub-sentences
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const subSentences = greeting.map(subArr => subArr.join(" "));
console.log(subSentences); // Output: ["Hello young grasshopper!", "you are", "learning fast!"]

// 3. Turning greeting into a single complete string
const fullSentence = greeting.map(subArr => subArr.join(" ")).join(" ");
console.log(fullSentence); // Output: "Hello young grasshopper! you are learning fast!"

// 4. Extracting the deeply trapped number 3
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
const untrapped = trapped.flat(Infinity);
console.log(untrapped); // Output: [3]
