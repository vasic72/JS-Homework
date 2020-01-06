// TASK 1
console.log("TASK 1");

var sentence = "Lorem ipsum dolor sit amet.";
function makeLowerCase(someString) {
	return someString.toLowerCase();
};
console.log(sentence);
console.log("To lowercase: " + makeLowerCase(sentence));

// TASK 2
console.log();
console.log("TASK 2");

var lorem = "Lorem ipsum dolor sit amet.";
function checkSit(someString) {
	if (someString.indexOf("sit") > -1) {
		console.log("There is  a word 'sit' in a sentence:" , lorem);
	} else
		console.log("There is NOT a word 'sit' in a sentence:", lorem);
};
checkSit(lorem);

// TASK 3
console.log();
console.log("TASK 3");

var string = "Lorem ipsum dolor sit amet";
function findIndex(someString) {
	return someString.length - 1;
};
console.log(string);
console.log("Index of the last letter in the sentence is: " + findIndex(string));

// TASK 4
console.log();
console.log("TASK 4");

var sample = "Lorem ipsum dolor sit amet";
function splitWords(someString) {
	var result = someString.split(" ", 3);
	return result;
};
console.log(sample);
console.log(splitWords(sample));

// TASK 5
console.log();
console.log("TASK 5");

var givenString = "Piter is an actor.";
function switchLetters(someString) {
	var result;
	result = someString.slice(0,3) +
			someString.slice(15,16) +
			someString.slice(4,15) +
			someString.slice(3,4) +
			someString.slice(16,18);
	return result;
};
console.log(givenString);
console.log(switchLetters(givenString));

// TASK 6
console.log();
console.log("TASK 6");

var someData = [34, 23, 14, 56, 23, 44, 65];
function removeFiftySix(arr) {
	var result = someData.filter(function(item) {
     return item !== 56;
  	});
	console.log(result);
};

console.log(someData);
console.log("Removed 56");
removeFiftySix(someData);
  
// TASK 7
console.log();
console.log("TASK 7");

var someData = [34, 23, 14, 56, 23, 44, 65];
console.log(someData);
function reorder (arr) {
	return arr.slice(1,4).concat(arr.slice(4,7).reverse());
};
console.log("Repacked:");
console.log (reorder(someData));

// TASK 9
console.log();
console.log("TASK 9");

var students = [{
     name: "Jim",
     avgGrade: 8.5556
  },{
     name: "Mike",
     avgGrade: 8.5492
  },{
     name: "Anna",
     avgGrade: 8.9322
  },{
     name: "Jack",
     avgGrade: 8.6111
  }];

function goodStudents(arr) {
var highGradeStudents = arr.filter(function(item){
	item.avgGrade = item.avgGrade.toFixed(2);
	return item.avgGrade > 8.5;
});
return highGradeStudents;
};
console.log("students whose average grade is larger than 8.5:");
console.log(goodStudents(students));














