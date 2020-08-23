function sumNumbers(num) {
  let sum = 0;
  for (let index = 1; index <= num; index++) {
    sum += index;
  }
  return (`the sum of the all the numbers from 1 to ${num} is ${sum}`);
}

console.log(sumNumbers(2));
console.log(sumNumbers(8));
console.log(sumNumbers(30));
console.log(sumNumbers(245));