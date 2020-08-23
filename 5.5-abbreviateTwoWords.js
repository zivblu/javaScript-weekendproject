function abbreviateTwoWords(src) {

  let temp = src.split(' ');
  for (let index = 0; index < temp.length; index++) {
    temp[index] = temp[index].abbreviate();
  }
  return temp.join('.');

}

String.prototype.abbreviate = function () {   //Add method to string class
  temp1 = this[0].toUpperCase();
  return temp1;
}

console.log(abbreviateTwoWords(`big trouble`));
console.log(abbreviateTwoWords(`SMall GAps`));
console.log(abbreviateTwoWords(`ALL CAPITAL`));



