"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calculator_1 = require("./calculator");
// Creates a new instance of the SimpleCalculator class
var calculator = new calculator_1.SimpleCalculator(6, 3);
// Calls the methods on the calculator object and outputs a result
console.log(calculator.add()); // Output: 9
console.log(calculator.subtract()); // Output: 3
console.log(calculator.multiply()); // Output: 18
console.log(calculator.divide()); // Output: 2
