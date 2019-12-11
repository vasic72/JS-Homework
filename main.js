// TASK 1:
// Based on existing object:
// Create a function which should change age to 34, and delete married property. In the end console.log object.

console.log("TASK 1");
var person = {
	name: "Mike",
	age: 28,
	married: true
};
console.log(person);
function modifyObject (person) {
 	person.age = 34;
 	delete person.married;
 	console.log(person);
};
console.log("After invoking function:");
modifyObject (person);

// TASK 2:
// Based on existing object:
// Create a function which should check if person has children property,
// if not add it. Its value should be array containing two objects with children data.
// Each object should contain child name, age and gender.

var personTwo = {
	name: "Jack",
	age: 32,
	married: true
};

console.log("TASK 2");
console.log(personTwo);

function checkChildren(person, hasChildren) {
	if (!person.hasOwnProperty(hasChildren)) {
		person.children = [
			{
				name: "Marko",
				age : 18,
				gender : "male"
			},
			{
				name: "Milica",
				age : 8,
				gender : "female"
			}
		];
	};
	return person;
};
console.log("After invoking function:");
console.log(checkChildren(personTwo, "children"));

// TASK 3:
// Based on existing array of objects:
// Create a function which should console.log if student passed exam, result should be something like:
// "Jack passed exam" or "Mike didn't pass exam"

console.log("TASK 3");
var students = [ 
   {
       name: 'Mike',
       age: 28,
       passed: false
   },
   {
       name: 'Anna',
       age: 23,
       passed: true
   },
   {
       name: 'Jack',
       age: 32,
       passed: true
   },
];
console.log(students);

function hasPass (name) {
	for (var i = 0; i < students.length; i++) {
		if (students[i].passed) {
			console.log(students[i].name + " passed exam.");
		} else {
			console.log(students[i].name + " didn't pass exam.");
		};
	};
};

hasPass (students);

// TASK 4:
// Based on existing array of objects:
// Create a function which should repack existing data into three arrays,
// names, ages, and passed.

var students = [ 
   {
       name: 'Mike',
       age: 28,
       passed: false
   },
   {
       name: 'Anna',
       age: 23,
       passed: true
   },
   {
       name: 'Jack',
       age: 32,
       passed: true
   },
];
console.log("TASK 4");
console.log(students);

function repack (students) {
	var names = [];
	var ages = [];
	var passed = [];

	for (var i = 0; i < students.length; i++) {
		names[names.length] = students[i].name;
		ages[ages.length] = students[i].age;
		passed[passed.length] = students[i].passed;
	};
	console.log("Names: " + names);
	console.log("Ages: " + ages);
	console.log("Passed: " + passed);
};

repack (students);

// TASK 5:
// Based on existing object:
// Create the other object which should inherit data from existing object.
// Then console.log age by accessing the newly created object.

console.log("Task 5");
var person = {
	name: "Jack",
	age: 32,
	married: true
};
console.log("Initial object - Person:");
console.log(person);

var newPerson = Object.create(person);
newPerson.age = person.age;

console.log("Second object - age:");
console.log(newPerson.age);


// Task 6
// Based on existing object:
// Create a method which, when called, should console.log name and age of existing object.
console.log("Task 6");
var person = {
	name: "Mike",
	age: 28,
	married: true,
	print : function (name, age) {
		console.log(this.name);
		console.log(this.age);
	}
}
console.log(person);
person.print(person.name, person.age);

// TASK 7:
// Based on existing object:
// Create a method which should create name, age and married properties
// in existing object,based on parameters passed in method.

console.log("Task 7");
var person = {
	createData : function (name, age, married) {
		this.name = name;
		this.age = age;
		this.married = married;
	}
};
person.createData("Tom", 55, true);
console.log(person);
