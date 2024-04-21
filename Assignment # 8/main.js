// Q. Write a program that takes an array of numbers as input. Double each even number in the array and remove all odd numbers. Return the modified array.

let arr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

evenArr1 = [];

for (i=0;i<arr1.length;i++){
    if(arr1[i]%2 ==0){
evenArr1.push(arr1[i])
    }
}
// console.log(evenArr1);
squareEvenArr = []
for(i=0;i<evenArr1.length;i++){
squareEvenArr[i] = evenArr1[i]**2
}
console.log(squareEvenArr)


// Q.Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0

let password = prompt ("Enter the password")
// password = "abcddfkkfk"
isMinLength = false;
isAlphabet = false;
isNumber = false;
notStartWithNumber = true
alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

numChar = "123456789"
if (password.length>=6){
    isMinLength = true
}

// console.log(isMinLength)

if (numChar.indexOf(password[0]) !== -1) {
    notStartWithNumber = false
}

// console.log(notStartWithNumber)

for (i=0;i<password.length;i++){

    if(alphabets.indexOf(password[i]) !== -1){
        isAlphabet = true
    }
}
// console.log(isAlphabet)

for (i=0;i<password.length;i++){

    if(numChar.indexOf(password[i]) !== -1){
        isNumber = true
    }
}
// console.log(isNumber)

if (isMinLength && isAlphabet && isNumber && notStartWithNumber){

    // console.log("Pasword is accepted")
    alert ("Password is accepted")
}

else {
    // console.log("enter valid password")
    alert("Enter valid password");
}
// Q.Write a program that takes two arrays of numbers as input and returns a new array containing only the elements that are present in both arrays. Use nested for loops to compare each element of the first array with each element of the second array.

let array1 = ["apple","banana","watermelon","kiwi"];
let array2 = ["orange","avacado","guava","apple","strawberry","banana"];
commonFruits = [];
for(i=0;i<array1.length;i++){
    for(j=0;j<array2.length;j++){
        if (array1[i] == array2[j]){
            commonFruits.push(array2[j])
        }
    }
}
console.log(commonFruits)
// Q.Write a program that takes a number as input and checks whether it is a prime number or not.
// checkPrimeNum = prompt ("Enter any number");
checkPrimeNum = prompt("Enter any number");

isPrimeNum = false;

if (checkPrimeNum<=1){
    // console.log("Enetered number is not a prime number")
    alert ("Enetered number is not a prime number");
}
else if (checkPrimeNum==2){
    alert ("Entered number is a prime number");
}
else {
    for (i=2;i<checkPrimeNum;i++){
        if (checkPrimeNum%i ==0){
           isPrimeNum = false
        //    console.log("Enetered number is not a prime number");
        alert ("Enetered number is not a prime number");
           break
        }
        
       else  alert ("Entered number is a prime number");
       break 
    }
}


// Q.Write a program that takes a nested array as input and flattens it into a single array. For example, if the input is [[1, 2], [3, 4], [5, 6]], the output should be [1, 2, 3, 4, 5, 6].
nestedArray = [[1,2],[3,4],[5,6]];
// outputArray = [];
output = nestedArray.join(",");
console.log(output)