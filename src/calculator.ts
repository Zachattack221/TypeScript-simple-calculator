// // Establishes and exports an interface for calculator object
export interface Calculator {
  num1: number;
  num2: number;
  add(): number;
  subtract(): number;
  multiply(): number;
  divide(): number;
}
// // Creates a class to implement and export the Calculator interface
export class SimpleCalculator implements Calculator {
  num1: number;
  num2: number;

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

    return this.num1 / this.num2;
  }
}
