// Creates and exports function to refactor numeric inputs to their corresponding string representations
export function formatNumber(num: number): string {
  return num.toLocaleString();
}

// Creates and exports function to take in an operation string and a result number to display a formatted message 
export function displayResult(operation: string, result: number): void {
  console.log(`Result of ${operation}: ${result}`);
}