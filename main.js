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
  for (var i = 1; i < numbers.length; i++) {
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
  for (var i = 1; i < numbers.length; i++) {
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
secondArray = [2, 3, 4, 11, 6, 7,];

makeProduct (findLowest(firstArray), findHighest(secondArray));

// TASK 7:
// Create a function that should receive an array and the second function.
// Array should be:
// [15, 35, 46, 23, 15, 17, 23, 24, 35, 12, 72, 64, 35, 22, 64]
// After array is received you should find all numbers from array which are unique,
// and create a new array out of them.
// Then, the second function that is passed in the first one should be called,
// and it should receive this new array we created.
// It should then delete the biggest number in the array, and console log the result (array).

var initialArray = [15, 35, 46, 23, 15, 17, 23, 24, 35, 12, 72, 64, 35, 22, 64];
console.log("TASK 7");
console.log("Initial Array: ");
console.log(initialArray);

function findUnique (arrNumbers, secondFunction) {
	var uniqueArray = [];
	for (var i = 0; i < arrNumbers.length; i++) {
		var times = 0;
		for (var j = 0; j < arrNumbers.length; j++) {
			if (arrNumbers[i] === arrNumbers[j]) {
				times += 1;
			};
		};
		if (times === 1) {
			uniqueArray[uniqueArray.length] = arrNumbers[i];
		};
	};
	console.log("Unique numbers: ");
	console.log(uniqueArray);

	var finalArray = secondFunction(uniqueArray);
	console.log("Unique numbers without biggest number: ");
	console.log(finalArray);
};

function deleteBiggest (uniqueArray) {
	var finalArray = [];
	var max = uniqueArray[0];
	for (var i = 1; i < uniqueArray.length; i++) {
		if (uniqueArray[i] > max) {
			max = uniqueArray[i];
		};
	};
	for (var i = 0; i < uniqueArray.length; i++) {
		if (uniqueArray[i] !== max) {
			finalArray[finalArray.length] = uniqueArray[i];
		};
	};
	return finalArray;
}

findUnique (initialArray, deleteBiggest);
