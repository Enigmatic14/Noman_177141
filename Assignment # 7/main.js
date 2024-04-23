// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

firstName = "Muhammad ";
secondName = "Noman";
fullName = firstName + secondName;
console.log(`Hello!! ${fullName}`)

// Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

let favPhone = "Samsung Galaxy S6 Edge Plus"
console.log(favPhone.length)

// Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

let strPak = "Pakistani";
console.log(strPak.indexOf("n"))

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

let strHelloWorld = "Hello World";
console.log(strHelloWorld.lastIndexOf("l"))

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

strPak = "Pakistani";
console.log(strPak.charAt(3))

// 6. Repeat Q1 using string concat() method.

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

cityName = "Hyderabad";
cityName = cityName.replace("Hyder","Islam");
console.log(cityName)

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

let message ="Ali and Sami are best friends. They play cricket and football together"
message = message.replaceAll("and","&")
console.log(message)

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

strNum = "472"
console.log(typeof strNum)
strNum = parseInt(strNum)
console.log(typeof strNum)

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

userInput10 = "peanuts";
console.log(userInput10.toUpperCase())

// 11. Write a program that takes user input. Convert and
// show the input in title case.

userInput11 = "javascript";
console.log(userInput11.charAt(0).toUpperCase()+userInput11.slice(1))

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

num12 = 35.36;
num12 = num12.toString();
console.log(num12)
num12 = num12.replace(".","")
console.log(num12)

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

para13 = "noman1234@";
for (i=0;i<para13.length;i++){
    if (para13.charCodeAt(i)==33 || para13.charCodeAt(i)==44 || para13.charCodeAt(i)==46 || para13.charCodeAt(i)==64){
        console.log("Please enter a valid username")
    }
}

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

arr14 = ["cake","apple pie","cookie","chips","patties"];
userInput14 = "Chips";
isfound14 = false;
for (i=0;i<arr14.length;i++){
    if (userInput14.toLowerCase() === arr14[i]){
        console.log(`${arr14[i]} is availble at index ${i}`)
        isfound14 = true
    }
    
}

if (isfound14 == false){
    console.log("Sorry item is not available")
}

// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

userInput16 = "University of Karachi";
for(i=0;i<userInput16.length;i++){
    console.log(userInput16.charAt(i))
}

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

str18 = "The quick brown fox the jumps over the lazy dog"
count = 0;
