"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importing React and ReactDOM to access and display React Components 
var react_1 = require("react");
var react_dom_1 = require("react-dom");
// Import functions from other ts files in src folder
var calculator_1 = require("./calculator");
// Creates a new instance of the SimpleCalculator class
var calculator = new calculator_1.SimpleCalculator(6, 3);
// Calls the methods on the calculator object and outputs a result
console.log(calculator.add()); // Output: 9
console.log(calculator.subtract()); // Output: 3
console.log(calculator.multiply()); // Output: 18
console.log(calculator.divide()); // Output: 2
react_dom_1.default.render(<App />, document.getElementById('root'));
