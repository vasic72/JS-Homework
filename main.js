// OBJECTS HOMEWORK 2

// TASK 1
console.log("TASK 1");
var oneArray = [0, 1, 2];
var count = 1;
for (var i  = 0; i < oneArray.length; i++) {
	for (var j  = 0; j < oneArray.length; j++) {
		console.log("At position " + i + ", subposition " + j + ", value is " + count);
		count += 1;
	};
};

console.log();
console.log("TASK 2");

// TASK 2
function printNameAge (name, age) {
	console.log (name, age);
};

var arr = [
	{
		name : "Bob",
		age : 23
	},
	{
		name : "Tom",
		age : 44
	},
	{
		name : "Jin",
		age : 77
	}
];

for (var i = 0; i < arr.length; i++) {
	printNameAge (arr[i].name, arr[i].age);
};

// PRACTISING

console.log();
console.log("PRACTISING");
console.log();

// TASK 1

console.log("TASK 1");
var someData = {
	name: "Peter",
	lastName: "Dinklage",
	status: "married"
};

function repack (person) {
	var newPerson = {};
	newPerson[person.name] = person.name;
	newPerson[person.lastName] = person.lastName;
	newPerson[person.status] = person.status;

	return newPerson;
};
console.log("Repacked:")
console.log(repack(someData));

//TASK 2
console.log("TASK 2");

var someData = [13, 45, 56, [32, 11], 27, [55, 92]];
console.log(someData);

function repackArray (arr) {
	newArray = [];
	for (var i = 0; i < arr.length; i++) {
		if ((typeof (arr[i])) === "number") {
			newArray[newArray.length] = arr[i];
		} else {
			for (var j = 0; j < arr[i].length; j++) {
				newArray[newArray.length] = arr[i][j];
			}
		}
	}
	console.log("All elements in one array: ");
	console.log(newArray)
};

repackArray(someData);

// TASK 3
console.log("TASK 3");
var someData = [13, 45, 56, [32, 11], 27, [55, 92]];
console.log(someData);

function receiveArray (arr) {	//[13, 45, 56, [32, 11], 27, [55, 92]];
	var subArrays = [];			// array of subarrays
	for (var i = 0; i < arr.length; i++) {		
		if ((typeof (arr[i])) !== "number") {
				subArrays[subArrays.length] = arr[i];
		}
	};
	console.log("Array of subarrays:");	
	console.log(subArrays);	
	joinSubArrays (subArrays)	// [[32,11], [55, 92]]
};

function joinSubArrays (subarrays) {  //[[32,11], [55, 92]]
	var joinedArray = [];

	for (var i = 0; i < subarrays.length; i++) {
		for (var j = 0; j < subarrays[i].length; j++) {
			joinedArray[joinedArray.length] = subarrays[i][j];
		};
	};
	console.log("Joined subarrays: ");
	console.log(joinedArray);
};

receiveArray (someData);

//TASK 4
console.log("TASK 4");
var someData = {
	name: "Peter",
	lastName: "Dinklage",
	status: "married"
};
console.log("Initial object:");
console.log(someData);

function checkName (obj) {
	if (obj.hasOwnProperty("name")) {
		removeName(obj);
	} else {
		setName(obj);
	}
	return obj;
}

function removeName (obj) {
	delete obj.name;
	return obj; 
};

function setName (obj) {
	obj.name = "John";
	return obj;
};
console.log("After invoking function 'checkName'");
console.log(checkName(someData));

//TASK 5
console.log("TASK 5");
var someData = {
	name: "Peter",
	lastName: "Dinklage",
	status: "married",
	checkName : function() {
		if (this.hasOwnProperty("name")) {
			this.secondMethod();
		};
	},
	secondMethod : function() {
		delete this.name;
		console.log(someData);
		this.thirdMethod();
	},
	thirdMethod : function() {
		this.name = previousName; // or "Mike"
		console.log(someData);
	}
};
var previousName = someData.name;
someData.checkName();
