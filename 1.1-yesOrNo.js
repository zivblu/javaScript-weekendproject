function isBoolean(bool){
if(bool === true){
  return 'Yes';
}
return 'No';
}

let z = true;
console.log(isBoolean(z));

const d = false;
const isBoolean1 = d === true ? 'Yes' : 'No';

console.log(isBoolean1);