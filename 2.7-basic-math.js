function basicMath(operation, value1, value2) {

  switch (operation) {
    case '+':
      console.log(`The Addition of ${value1} and ${value2} is ${value1 + value2}`);
      break;
    case '-':
      console.log(`The Subtraction of ${value1} and ${value2} is ${value1 - value2}`);
      break;
    case '*':
      console.log(`The Multiplication of ${value1} and ${value2} is ${value1 * value2}`);
      break;
    case '/':
      console.log(`The Division of ${value1} and ${value2} is ${value1 / value2}`);
      break;
    default:
      break;
  }

}

basicMath(`+`, 2, 3);
basicMath(`-`, 6, 20);
basicMath(`*`, 5, 455);
basicMath(`/`, 56754, 3);