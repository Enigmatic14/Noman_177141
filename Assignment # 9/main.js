// Coding Question 1: Write a function in JavaScript called roundNumber() that takes a number as input and returns the number rounded to the nearest integer.
// Hint: Consider using the Math.round() method to round the input number to the nearest integer.

let inputNumQ1 = parseFloat(prompt ("Enter any number"));
inputNumQ1 = Math.round(inputNumQ1);
alert (inputNumQ1);

// Coding Question 2: Create a function called generateRandomInRange(min, max) that generates a random integer between min and max (inclusive) in JavaScript.
// Hint: You can use Math.random() to generate a random number between 0 and 1, then scale and shift it to fit within the specified range.

minNumQ2 = parseInt(prompt("Enter the start of range"))
maxNumQ2 = parseInt(prompt("Enter the end of range"))

randomNumQ2 = Math.random();

console.log(randomNumQ2)
maxRangeQ2 = Math.ceil(randomNumQ2*(maxNumQ2-minNumQ2)+minNumQ2)
alert(maxRangeQ2);

// Coding Question 3: Write a JavaScript function called convertToNumber(str) that takes a string as input and converts it into a number. Ensure the function returns NaN if the string cannot be converted into a valid number.
// Hint: Look into the parseInt() and parseFloat() functions in JavaScript. Make sure to handle cases where the string is not a valid number.

strQ3="12345";
console.log(Number(strQ3));
console.log(parseInt(strQ3))
str1Q3 = "1234.34"
console.log(parseInt(str1Q3))
console.log(parseFloat(str1Q3))
str2Q3 = "123a678"
console.log(parseInt(str2Q3))
console.log(parseFloat(str2Q3))
console.log(Number(str2Q3))

// Coding Question 4: Implement a JavaScript function called truncateDecimal(num, decimals) that truncates a number num to a specified number of decimals.
// Hint: You may want to multiply the input number by a power of 10, truncate the decimal part, and then divide it back to the original power of 10 to achieve the desired truncation.

function truncateDecimal(numQ4, decimalsQ4) {
    // Multiply the number by 10^decimals, truncate the decimal part, and divide back
    return Math.floor(numQ4 * 10 ** decimalsQ4) / 10 ** decimalsQ4;
}


console.log(truncateDecimal(3.14159, 2)); 
console.log(truncateDecimal(123.456, 0)); 
console.log(truncateDecimal(0.123456, 4));

// Coding Question 5: Develop a JavaScript function named formatNumber(num, decimalPlaces) that formats a number num to a string representation with the specified number of decimal places decimalPlaces. Ensure that the function returns a string even if the input is not a valid number.
// Hint: Use the .toFixed() method to control the number of decimal places. Remember to handle non-numeric inputs gracefully to prevent errors.

