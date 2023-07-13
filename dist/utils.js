"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayResult = exports.formatNumber = void 0;
// Creates and exports function to refactor numeric inputs to their corresponding string representations
function formatNumber(num) {
    return num.toLocaleString();
}
exports.formatNumber = formatNumber;
// Creates and exports function to take in an operation string and a result number to display a formatted message 
function displayResult(operation, result) {
    console.log("Result of ".concat(operation, ": ").concat(result));
}
exports.displayResult = displayResult;
