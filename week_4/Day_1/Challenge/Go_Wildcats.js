const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];

// 1. Usernames with an exclamation point using forEach
const usernames = [];
gameInfo.forEach(player => {
    usernames.push(`${player.username}!`);
});
console.log("Usernames:", usernames);


// 2. Usernames of players with a score > 5 using forEach
const winners = [];
gameInfo.forEach(player => {
    if (player.score > 5) {
        winners.push(player.username);
    }
});
console.log("Winners:", winners);


// 3. Find and display the total score
const totalScore = gameInfo.reduce((accumulator, player) => {
    return accumulator + player.score;
}, 0);
console.log("Total Score:", totalScore);
