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




function camelCase(src) {
  let num =0;
  for (let index = 0; index < src.length; index++) {
    if((src[index] === '-') || (src[index] === '_')){
      
      console.log([index]);
      console.log([index+1]);
      src = src.replace('_', '')
      .replace(src[index+1], src[index+1].toUpperCase());
      // console.log([index+1]);
      

      // .substr([index+1], [index+1])

    // .replace('_', src[index+1].toUpperCase())
    // .replace(src[index+1], '');
    console.log(src);

//       console.log(src[index]);
//       console.log(src[index + 1 ]);
//       src[index+1].toUpperCase() = src[index];
//       console.log(src[index+1]);
//       console.log(src[index]);
      
//       num = index;
// console.log(num);
// console.log(src);

    }
      
      
      
      // let new4;
  }
      
      //  new4 = src.replace('-', '').replace('_', '');

    // }
  console.log(src);
  
  // return(new4);
  }
  // camelCase(`sh_a_n_i`);
  camelCase(`shun_shi`);
  // console.log(camelCase( `sh_ani`));
  console.log(camelCase( `abud_abi`));

