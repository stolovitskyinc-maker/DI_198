const numbers = [10,11,12,15,20];

numbers.forEach((num) => {
  if (num % 2 === 0) {
    console.log(num);
  }
});

const words = ["wow","hey","bye"];

const hasH = words.some((word) => word.startsWith('h'));
console.log(hasH);

const words = ["wow","hey","bye"];

const hasH = words.every((word) => word.startsWith('h'));
console.log(hasH);
