// There are two arrays:
// var dataOld = [34, true, "Peter", 1992];
// var dataNew = [];
// Repack old array to the new one, in the same order

var dataOld = [34, true, "Peter", 1992];
var dataNew = [];

for (var i=0; i<dataOld.length; i++) {
	dataNew[i] = dataOld[i];
}
console.log("TASK 1");
console.log("Old array: " + dataOld);
console.log("New array - same: " + dataNew);

// There are two arrays:
// var dataOld = [34, true, "Peter", 1992];
// var dataNew = [];
// Repack old array to the new one, in the reverse order

var dataOld = [34, true, "Peter", 1992];
var dataNew = [];

for (var i=0; i<dataOld.length; i++) {
	dataNew[i] = dataOld[dataOld.length - i - 1];
}
console.log("TASK 2");
console.log("Old array: " + dataOld);
console.log("New array - reversed: " + dataNew);

// There are two arrays:
// var dataOld = [34, true, "Peter", 1992];
// var dataNew = [12, "Jack"];
// Repack old array to the new one, so the data from two arrays is joined, starting with existing data from the new one.

var dataOld = [34, true, "Peter", 1992];
var dataNew = [12, "Jack"];
console.log("TASK 3");
console.log ("First array: " + dataOld);
console.log ("Second array: " +dataNew); 

var dataOldLength = dataOld.length;
var dataNewLength = dataNew.length; 

var i = dataNewLength; 

for (i ; i < (dataNewLength + dataOldLength); i++) {
    dataNew[i] = dataOld[i-dataNewLength];
}

console.log ("Joined: " + dataNew); 

// // TASK 4:
// There are two arrays:
// var a = [12, 56, 32, 44, 69];
// var b = [88, 7, 13];
// Create a new array that contains data from both arrays, starting with data from array a.
// Console log result

var a = [12, 56, 32, 44, 69];
var b = [88, 7, 13];
console.log("TASK 4");
console.log ("First array: " + a);
console.log ("Second array: " + b); 

var aLength = a.length;
var bLength = b.length; 

var i = aLength; 

for (i ; i < (aLength + bLength); i++) {
    a[i] = b[i-aLength];
}

console.log ("Joined: " + a); 

// TASK 5:
// There are two arrays:
// var a = [12, 56, 32, 44];
// var b = [88, 7, 13];
// Create a new array that contains data from both arrays,
// but in alternating order, one element from array a,
// then one element from array b, and so on. In the end it should look like this:
// [12, 88, 56, 7, 32, 13, 44]
// Console log result

console.log("TASK 5");
var a = [12, 56, 32, 44];
var b = [88, 7, 13];

console.log("First array: " + a);
console.log("Second array: " + b);

var result = [];
result[0] = a[0];
result[1] = b[0];

for (var i = 2; i < (a.length + b.length); i++) {
	if (i % 2 === 0) {
		result[i] = a[i/2];
	} else {
		result[i] = b[(i-1)/2];
	}
}
console.log("Alternating: " + result);

// TASK 6:
// Console log next pattern (you're allowed to use only single *)

console.log("TASK 6");
var i = 0;
var stars = "";
for (i; i < 7; i++) {
    stars = stars + "*";
    console.log(stars);
}                        

// TASK 7:
// Console log next pattern (you're allowed to use only single * or empty space)

console.log("TASK 7");
var starLength = 7;
var stars = "*";
for (i = 0; i < starLength; i++) {
    for (j = 0; j < starLength - 2; j++) {
       	if (i === 0 || i === starLength - 1) {
        	stars = stars + "*";
           	} else {
               stars = stars + " "; 
			  }
    }
    stars = stars + "*";
    console.log(i, stars);
    stars = "*";
}

 
 

