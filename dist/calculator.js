"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleCalculator = void 0;
// Create a class to implement the Calculator interface
var SimpleCalculator = /** @class */ (function () {
    function SimpleCalculator(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    SimpleCalculator.prototype.add = function () {
        return this.num1 + this.num2;
    };
    SimpleCalculator.prototype.subtract = function () {
        return this.num1 - this.num2;
    };
    SimpleCalculator.prototype.multiply = function () {
        return this.num1 * this.num2;
    };
    SimpleCalculator.prototype.divide = function () {
        if (this.num2 === 0) {
            throw new Error("Cannot divide by zero");
        }
        return this.num1 + this.num2;
    };
    return SimpleCalculator;
}());
exports.SimpleCalculator = SimpleCalculator;
// Creates a new instance of the SimpleCalculator class
var calculator = new SimpleCalculator(6, 3);
// Calls the methods on the calculator object and outputs a result
console.log(calculator.add()); // Output: 9
console.log(calculator.subtract()); // Output: 3
console.log(calculator.multiply()); // Output: 18
console.log(calculator.divide()); // Output: 2
var SimpleCalculator = /** @class */ (function () {
    function SimpleCalculator() {
    }
    return SimpleCalculator;
}());
exports.SimpleCalculator = SimpleCalculator;
