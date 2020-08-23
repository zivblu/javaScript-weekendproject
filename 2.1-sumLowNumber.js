const positiveNumbers = [264, 54, 6456546, 73, 4446, 743, 22];
let min = positiveNumbers.sort((a,b) => a - b).slice(0, 2);
let sum = positiveNumbers [0] + positiveNumbers [1];
console.log(min);
console.log(sum);