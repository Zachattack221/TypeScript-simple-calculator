"use strict";
// // Establishes an interface for calculator object
// interface Calculator {
//   num1: number;
//   num2: number;
//   add(): number;
//   subtract(): number;
//   multiply(): number;
//   divide(): number;
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleCalculator = void 0;
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
        return this.num1 / this.num2;
    };
    return SimpleCalculator;
}());
exports.SimpleCalculator = SimpleCalculator;
