// Importing React and ReactDOM to access and display React Components 
import React from 'react';
import ReactDOM from 'react-dom';

// Import functions from other ts files in src folder
import { SimpleCalculator, Calculator } from './calculator';
// TODO: find uses for utils functions, look into beginning react visual componenets 
import { formatNumber, displayResult } from './utils';

// Creates a new instance of the SimpleCalculator class
const calculator:Calculator = new SimpleCalculator(6, 3);

// Calls the methods on the calculator object and outputs a result
console.log(calculator.add()); // Output: 9
console.log(calculator.subtract()); // Output: 3
console.log(calculator.multiply()); // Output: 18
console.log(calculator.divide()); // Output: 2

// TODO: Work on rendering react componenets, move to another page
// ReactDOM.render(<App />, document.getElementById('root'));
