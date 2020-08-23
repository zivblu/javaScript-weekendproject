let findUniq = [1, 1, 1, 2, 1, 1];
let findUni = [0, 0, 0, 0, 0, 0, 0, 0.55, 0, 0];
let findUn = [2, 2, 2.35, 2, 2];
let findU = [56, 56, 4.5335, 56, 56];
let find = [888, 888, 8, 888, 888];


function unique(array) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === array[index + 1]) {
      continue;
    }
    return (`the unique number is ${array[index + 1]}`);
  }
}
console.log(unique(findUniq));
console.log(unique(findUni));
console.log(unique(findUn));
console.log(unique(findU));
console.log(unique(find));
