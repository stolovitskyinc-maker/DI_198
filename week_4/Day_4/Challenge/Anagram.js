function isAnagram(str1, str2) {
  // 1. Remove all whitespace and convert to lowercase
  const cleanStr1 = str1.replace(/\s+/g, '').toLowerCase();
  const cleanStr2 = str2.replace(/\s+/g, '').toLowerCase();

  // 2. If the lengths aren't equal after removing spaces, they cannot be anagrams
  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }

  // 3. Split into letters, sort them alphabetically, and join them back into a string
  const sortedStr1 = cleanStr1.split('').sort().join('');
  const sortedStr2 = cleanStr2.split('').sort().join('');

  // 4. Return the boolean comparison result
  return sortedStr1 === sortedStr2;
}

// --- TEST CASES ---
console.log(isAnagram("Astronomer", "Moon starer"));     // Returns: true
console.log(isAnagram("School master", "The classroom")); // Returns: true
console.log(isAnagram("The Morse Code", "Here come dots")); // Returns: true
console.log(isAnagram("Robot", "Friend"));               // Returns: false
