// TASK 1
console.log("TASK 1");
function isBrowserOnline() {
	if (navigator.onLine) {
		alert("Browser is online.");
		console.log("Browser is online.");
	} else alert("Browser is not online.")
};
isBrowserOnline();

// TASK 2
function reloadPage() {
	location.reload();
};
//reloadPage();
console.log("TASK 2");
console.log("Page is reloaded.");

// TASK 3
console.log("TASK 3");
function redirecting() {
location.href = "https://www.google.com"; 
};
function goBack() {
	history.back(); 
};
//setTimeout(redirecting, 3000);
console.log("Page is redirected");
//setTimeout(goBack, 6000);
console.log("we are back.");

// TASK 5
function randomNumber() {
	console.log("TASK 5");
	console.log("Random number is: ", Math.round(Math.random() * 10));
};
randomNumber();

//TASK 6
console.log("TASK 6");

var users = [
	{
		name : "Bob",
		age : 23,
		status : "inactive"
	},
	{
		name : "Tom",
		age : 44,
		status : "inactive"
	},
	{
		name : "Jin",
		age : 77,
		status : "inactive"
	},
	{
		name : "Mike",
		age : 43,
		status : "inactive"
	},
	{
		name : "Nick",
		age : 83,
		status : "inactive"
	}
];

var tempUserName = prompt("Enter the name, please.");
var userName = "";
users.forEach(function(item) {
	if (item.name.toLowerCase() === tempUserName.toLowerCase()) {
		userName = tempUserName;
		item.status = "active";
		localStorage.setItem("loggedInUser", userName);
	};
});

if (userName === "") {
	console.log("User with name " + tempUserName + " doesn't exist.")
} else {
	console.log("Welcome", userName, "- your status is: active");
	console.log(localStorage);
	setTimeout(LogOut, 60000);
	};

function LogOut() {
	localStorage.clear();
	console.log("Dear ", userName, "- you are logged out");
};

// TASK 4
var num = 1;
console.log("TASK 4");
function printNum() {
     console.log(num);
     if (num < 15) {
     	num++;
     } else {
     	clearInterval(counter);
     };
  };
var counter = setInterval(printNum, 1000);
