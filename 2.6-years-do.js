function years(year) {
  return Math.floor((year - 1) / 100) + 1;
}

console.log(years(2000));
console.log(years(1601));
console.log(years(1900));
console.log(years(1705));