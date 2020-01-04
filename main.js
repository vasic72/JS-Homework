// TASK 1
console.log("TASK 1");

function Student(name, lastName, age, averageGrade) {
	this.name = name;
	this.lastName = lastName;
	this.age = age; 
	this.averageGrade = averageGrade;        
  };

// TASK 2
console.log("");
console.log("TASK 2");

function Player(name, age, goals, yellowCards) {
	this.name = name;
	this.age = age;
	this.goals = goals;
	this.yellowCards = yellowCards;
  }

  var goalKeeper = new Player("Petar Borota", 32, 0, 2);
  var defense = new Player("Slobodan Santrac", 25, 67, 13);
  var attack = new Player("Blagoje Marjanovic", 29, 84, 23);

  console.log(goalKeeper, defense, attack);

// TASK 3
console.log("");
console.log("TASK 3");

var players = [["Petar Borota", 32, 0, 2],
	       ["Slobodan Santrac", 25, 67, 13],
	       ["Blagoje Marjanovic", 29, 84, 23]];

function PlayerLoop(player) {
	this.name = player[0];
	this.age = player[1];
	this.goals = player[2];
	this.yellowCards = player[3];
};

for (var i = 0; i < players.length; i++) {
	var name = players[i][0].toLowerCase();
	this[name] = new PlayerLoop(players[i]);

	console.log(this[name]);
};

// TASK 4
console.log("");
console.log("TASK 4");

function Operations(firstNumber, secondNumber, operation) {
	this.x = firstNumber;
	this.y = secondNumber;
	this.func = operation;
};

var multy = function (x, y) {
	return x * y;
};

var div = function (x, y) {
	return x / y;
};

var add = function (x, y) {
	return x + y;
};

var sub = function (x, y) {
	return x - y;
};

var multiplying = new Operations(2, 3, multy);
var dividing = new Operations(48, 4, div);
var adding = new Operations(22, 33, add);
var subtracting = new Operations(200, 30, sub);

console.log(multiplying);
console.log(multiplying.func(multiplying.x, multiplying.y));
console.log(dividing);
console.log(dividing.func(dividing.x, dividing.y));
console.log(adding);
console.log(adding.func(adding.x, adding.y));
console.log(subtracting);
console.log(subtracting.func(subtracting.x, subtracting.y));


console.log("TASK 4 - VERSION 2");

function OperationsVer(num1, num2, operation) {
 
  this.num1 = num1;
  this.num2 = num2;

  if (operation === mul) {
  	this.operation = function() {
  		return this.num1 * this.num2;
  		}
  } else

  if (operation === div) {
  	this.operation = function() {
  		return this.num1 / this.num2;
  	}
  } else

   if (operation === add) {
  	this.operation = function() {
  	return this.num1 + this.num2;
  	}
  } else

  	this.operation = function(){
  		return this.num1 - this.num2;
};
};

var mul = new OperationsVer(2, 3, mul);
var div = new OperationsVer(48, 4, div);
var add = new OperationsVer(22, 33, add);
var sub = new OperationsVer(200, 30, sub);

console.log(mul);
console.log(mul.operation(mul.num1, mul.num2));
console.log(div);
console.log(div.operation(div.num1, div.num2));
console.log(add);
console.log(add.operation(add.num1, add.num2));
console.log(sub);
console.log(sub.operation(sub.num1, sub.num2));
