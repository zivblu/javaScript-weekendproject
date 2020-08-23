function weirdCase(src) {
  let temp = src.split(' ');
  for (let index = 0; index < temp.length; index++) {
    temp[index] = temp[index].abbreviate();
  }
  return temp.join(' ');
}

String.prototype.abbreviate = function () {   //Add method to string class
  let temp = '';
  for (let index = 0; index < this.length; index++) {
    if (index % 2 === 0) {
      temp += this[index].toUpperCase();
    }
    else {
      temp += this[index].toLowerCase();
    }
  }
  return temp;
}

console.log(weirdCase(`me dont like javascript`));
console.log(weirdCase(`javascript is so hard`));
console.log(weirdCase(`no sleep till brooklyn`));
