function accum(s) {
  return s.toLowerCase()
      .split('')
      .map((char, idx) => `${char.toUpperCase()}${char.repeat(idx)}`)
      .join('-');
}
console.log(accum("abcd"));
console.log(accum("RqaEzty")); 
console.log(accum("cwAt"));