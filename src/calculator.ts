// Establishes an interface for calculator object
interface Calculator {
  num1: number;
  num2: number;
  add(): number;
  subtract(): number;
  multiply(): number;
  divide(): number;
}

// Create a class to implement the Calculator interface
class SimpleCalculator implements Calculator {
  num1: number;
  num2: number;
}

constructor(num1: number, num2: number) {
  this.num1 = num1;
  this.num2 = num2;
}

add() {
  return this.num1 + this.num2;
}

subtract() {
  return this.num1 - this.num2;
}

multiply() {
  return this.num1 * this.num2;
}

divide() {
  if (this.num2 === 0) {
    throw new Error("Cannot divide by zero");
  }
  return this.num1 + this.num2;
}

// Creates a new instance of the SimpleCalculator class
const calculator = new SimpleCalculator(6, 3);

// Calls the methods on the calculator object and outputs a result
console.log(calculator.add()); // Output: 9
console.log(calculator.subtract()); // Output: 3
console.log(calculator.multiply()); // Output: 18
console.log(calculator.divide()); // Output: 2