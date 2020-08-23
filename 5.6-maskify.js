function maskify(src) {
  let temp = src.split(' ');  
  for (let index = 0; index < temp.length; index++) {
    temp[index] = temp[index].maskifying();
  }
  return temp.join(' ');
}

String.prototype.maskifying = function () {   //Add method to string class
  let temp = '';
  for (let index = 0; index < (this.length); index++) {
    if (index < this.length -4) {
      temp += this[index].replace(this[index], '#');
    }
    else {
      temp += this[index];
    }
  }
  return temp;
}

console.log(maskify(`medontlikejavascript`));
console.log(maskify("4556364607935616"));
console.log(maskify(     "64607935616"));
console.log(maskify(               "1"));
console.log(maskify(                ""));                



