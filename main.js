// TASK 1:
// Create a function that should receive an array,
// and return an array in reverse order. Result should be stored in a variable

function reversedArray (inputArray) {
  var resultArray = [];
  for (var i=0; i<inputArray.length; i++) {
    resultArray[i] = inputArray[inputArray.length - i - 1];  
  };
  return resultArray;
};

numbers = [1, 3, 7, 14, 45];

console.log("TASK 1");
console.log("Initial arrey: " + numbers);
console.log("Reversed arrey: " + reversedArray (numbers));

// TASK 2: 
// Create a function that should receive parameter
// of any type, and console log the type of received data

function printType (x) {
  console.log(typeof(x));
}

console.log("TASK 2");

printType(5);
printType("55");
printType(true);
printType([5, 7]);

// TASK 3: 
// Create a function that should receive an array of at least five
// names, and return the length of the longest name in the array.
// Result should be stored in a variable

console.log("TASK 3");
function longestName (names) {
  var maxNameLength = names[0].length;
  for (var i=1; i<names.length; i++) {
    if (names[i].length > maxNameLength) {
      maxNameLength = names[i].length;
    }
  }
  return maxNameLength;
}

allNames = ["Bob", "John", "Nenad", "Baltazar", "Mike"];
console.log(allNames);
console.log("Longest name has " + longestName(allNames) + " letters");

// TASK 4: 
// Create a function that should receive an array of numbers,
// find the second lowest and second greatest number, 
// and console log result


console.log("TASK 4");
function SecondMinMax (numbers) {
  var temp;
  for (var i=0; i<numbers.length; i++) {
    for (var j=1; j<(numbers.length-i); j++) {  
      if (numbers[j-1] > numbers[j]){   
         temp = numbers[j-1];  
         numbers[j-1] = numbers[j];  
         numbers[j] = temp; 
      } 
    }
  }
  console.log("Second lowest: " + numbers[1]);
  console.log("Second greatest: " + numbers[numbers.length-2]);
}

inputArray = [1, 4, 7, 2, 5];
console.log(inputArray)
SecondMinMax(inputArray);

// TASK 5:
// Create two functions. First one should receive two parameters,
// an array of numbers, and a single number.
// Then it should call the second function,
// and pass the same array and number into it.
// The second function should, based on an array and number provided,
// find all numbers in an array which are bigger then a provided number,
// and create an array of those numbers. Then it should console log result.

console.log("TASK 5");

function firstFunction (arrayOfNumbers, number) {
  secondFunction (arrayOfNumbers, number);
};

function secondFunction (secondArrayOfNumbers, secondNumber) {
  var resultArray = [];
  var resultIndex = 0;
  for (var i=0; i<secondArrayOfNumbers.length; i++) {
    if (secondArrayOfNumbers[i] > secondNumber) {
      resultArray[resultIndex] = secondArrayOfNumbers[i];
      resultIndex += 1;
    };
  };
  console.log("Bigger then " + secondNumber + ": " + resultArray);
  return resultArray;
};

inputArray = [1, 3, 6, 7, 9, 12, 17, 23];
refNumber = 8;
console.log(inputArray, "Ref. Number: " + refNumber)

firstFunction(inputArray, refNumber);

// TASK 6:
// Create three functions. 
// First one should receive an array and return the lowest number in the array.
// Second one should receive an array and return the highest number if an array.
// Third function should receive first two functions, and should multiply
// the result of the first function with the result of the second function.
// Then it should console log the result.

console.log("TASK 6");
function findLowest (numbers) {
  var lowest = numbers[0];
  for (var i=1; i<numbers.length; i++) {
    if (numbers[i] < lowest) { 
      lowest = numbers[i];
    }
  }
  console.log(numbers);
  console.log("Lowest is: " + lowest);
  return lowest;
}

function findHighest (numbers) {
  var highest = numbers[0];
  for (var i=1; i<numbers.length; i++) {
    if (numbers[i] > highest) {
      highest = numbers[i];
    }
  }
  console.log(numbers);
  console.log("Highest is: " + highest);
  return highest;
}

function makeProduct (lowest, highest) {
  result = lowest * highest;
  console.log("Product is: " + result);
}

firstArray = [100, 20, 30, 40];
secondArray = [2, 3, 4, 5, 6, 7,];

makeProduct (findLowest(firstArray), findHighest(secondArray));
