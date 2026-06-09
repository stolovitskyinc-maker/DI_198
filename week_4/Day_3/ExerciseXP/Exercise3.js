// When you convert a JavaScript object into a JSON string using JSON.stringify(), nested objects remain completely intact. They are automatically converted into nested JSON objects, preserving the original tree structure.The only difference is that all keys are now wrapped in double quotes (""), which is required by the strict JSON format standard.
const marioGame = {
  detail : "An amazing game!",
  characters : {
      mario : {
        description:"Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser : {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach : {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
  },
}

// Standard conversion (one long string)
const standardJson = JSON.stringify(marioGame);

// Pretty-printed conversion (indented with 2 spaces)
const prettyJson = JSON.stringify(marioGame, null, 2);

console.log(prettyJson);