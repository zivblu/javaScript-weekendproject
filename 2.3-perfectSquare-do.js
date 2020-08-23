function findNextSquare(sq) {
  return Math.sqrt(sq) % 1 === 0 ? Math.pow(Math.sqrt(sq) + 1, 2) : -1
}
console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(643));
