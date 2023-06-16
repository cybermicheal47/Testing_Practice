function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}



function reverseString(str) {
    return str.split('').reverse().join('');

}



function calculator (){
    return {
        add: (a, b) => a + b,
        subtract: (a, b) => a - b,
        divide: (a, b) => a / b,
        multiply: (a, b) => a * b,
      };
    
}


// Analyzes an array of numbers and returns an object with average, min, max, and length
function analyzeArray(array) {
    const length = array.length; // Get the length of the array
    const sum = array.reduce((acc, num) => acc + num, 0); // Calculate the sum of all numbers in the array
    const average = sum / length; // Calculate the average by dividing the sum by the length
    const min = Math.min(...array); // Find the minimum value in the array using Math.min and spread operator
    const max = Math.max(...array); // Find the maximum value in the array using Math.max and spread operator
  
    return {
      average,
      min,
      max,
      length,
    };
  }




module.exports = { capitalize , reverseString , calculator, analyzeArray };
