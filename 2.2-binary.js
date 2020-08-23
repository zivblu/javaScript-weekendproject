
const binaryConvertor = (binaryArray) => {
const newArray = binaryArray.join("");
let decimaelNumber = parseInt(newArray, 2);
return(` [${binaryArray}] transpormed to ${decimaelNumber}`);
}

console.log(binaryConvertor([0, 0, 0, 1] ));
console.log(binaryConvertor([0, 0, 1, 0]));
console.log(binaryConvertor([0, 1, 0, 1]));
console.log(binaryConvertor([1, 0, 0, 1]));
console.log(binaryConvertor([0, 0, 1, 0]));
console.log(binaryConvertor([0, 1, 1, 0]));
console.log(binaryConvertor([1, 1, 1, 1]));
console.log(binaryConvertor([1, 0, 1, 1]));
console.log(binaryConvertor([1, 0, 1, 1, 0, 0, 1, 0, 1]));
console.log(binaryConvertor([1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1]));


