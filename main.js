// TASK 1 :
// Write a JavaScript conditional statement to find the largest of five numbers.
// Console log the result in the string format (sentence + number variable).
// Numbers : 15, -2, 22, 0, 13 

var x1 = 15;
var x2 = -2;
var x3 = 22;
var x4 = 0;
var x5 = 13;
var largestNumber;

if (x1 > x2) {
	largestNumber = x1;
}	else largestNumber = x2;

if (x3 > largestNumber) {
	largestNumber = x3;
}

if (x4 > largestNumber) {
	largestNumber = x4;
}

if (x5 > largestNumber) {
	largestNumber = x5;
}

console.log ("Largest number is " + largestNumber);

// TASK 2 :
// Write a JavaScript conditional statement to find the sign (+ or -)
// of product of three numbers. Console log the result.
// Numbers : 3, -7, 2 

var a = 3;
var b = -7;
var c = 2;
var  signOfProduct;

if (a * b * c > 0) {
	signOfProduct = "+";
}	else signOfProduct = "-";

console.log("Sign of product three numbers is: " + signOfProduct);

// TASK 3 :
// Write a switch statement to console log
// "Hello world" in 5 different languages

var language = "german";
switch (language) {
	case "english" : console.log("Hello World");
	break;
	case "french" : console.log("Bonjour le monde");
	break;
	case "spainian" : console.log("Hola Mundo");
	break;
	case "russian" : console.log("Привет, мир");
	break;
	default: console.log("Zdravo svete");
	break;
}

// TASK 4 :
// Create userAge variable, and give it some value.
// Write a ternary operator that checks if a user is 28 or older. Store result in a variable.
// Then write an if/else statement using result from variable. 
// If it's false (first check this), console log:
// "User is less than 28 years old"
// If it's true, create new if/else statement that check if user is older than 28.
// If it's true, console log:
// "User is older than 28"
// If not, console log:
// "User is 28"

var userAge = 47;
var isOlder;

userAge >= 28 ? isOlder = true : isOlder = false;

if (!isOlder) {
	console.log("User is less than 28 years old");
} else if (userAge > 28) {
	console.log("User is older than 28");
} else console.log("User is 28");