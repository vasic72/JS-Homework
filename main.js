var teamData = { teamName : "OFK BEOGRAD",
				logoPath : "images/logo.png",
				players : [
					{
						name : "Vukasin Vranes",
						number : 1,
						position : "goalkeeper",
						age : 24
					},
					{
						name : "Dejan Jevtic",
						number : 2,
						position : "goalkeeper",
						age : 21
					},
					{
						name : "Nikola Ignjatovic",
						number : 3,
						position : "defense",
						age : 28
					},
					{
						name : "Zlatko Ilicic",
						number : 4,
						position : "defense",
						age : 31
					},
					{
						name : "Stefan Aleksic",
						number : 5,
						position : "defense",
						age : 19
					},
					{
						name : "Dragan Markovic",
						number : 6,
						position : "defense",
						age : 25
					},
					{
						name : "Djordje Zupanjac",
						number : 7,
						position : "center",
						age : 28
					},
					{
						name : "Predrag Petosevic",
						number : 8,
						position : "center",
						age : 22
					},
					{
						name : "Mateja Ristic",
						number : 9,
						position : "center",
						age : 24
					},
					{
						name : "Stefan Kukoljac",
						number : 10,
						position : "center",
						age : 21
					},
					{
						name : "Mirko Djurovic",
						number : 11,
						position : "center",
						age : 27
					},
					{
						name : "Milan Bacvanski",
						number : 12,
						position : "attack",
						age : 29
					},
					{
						name : "Stefan Jankovic",
						number : 13,
						position : "attack",
						age : 31
					},
					{
						name : "Aleksa Velickovic",
						number : 14,
						position : "attack",
						age : 25
					},
					{
						name : "Vojislav Nedeljkovic",
						number : 15,
						position : "attack",
						age : 28
					}
				]
};

var allPlayers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
	
var bench = []; //array of reserves
var random = Math.round(Math.random());  // One goalkeeper to the bench
bench[bench.length] = allPlayers[random];
allPlayers.splice(random, 1); // removing reserve from allPlayers

for (var i = 0; i < 3; i++) { // three players more to the bench
var random = Math.floor(Math.random() * (allPlayers.length - 1) + 1); //  + 1 to avoid second goalkeeper to the bench
bench[bench.length] = allPlayers[random];
allPlayers.splice(random, 1); // removing reserve from allPlayers
;}

// if (localStorage.hasOwnProperty("firstSquad")) {
// 		allPlayers = localStorage.getItem("firstSquad");
// 		bench = localStorage.getItem("bench");
// 	} else {
// 		localStorage.setItem("firstSquad", allPlayers);
// 		localStorage.setItem("bench", bench);
// };

// 	console.log("MAIN");
// for (var i = 0; i < allPlayers.length; i++) {
// 	console.log(allPlayers[i] + 1, teamData.players[allPlayers[i]].name);
// };
// 	console.log("RESERVE");
// for (var i = 0; i < bench.length; i++) {
// 	console.log(bench[i] + 1, teamData.players[bench[i]].name);
// };

var banner = document.createElement("img"); // adding banner
var header = document.querySelector("header");
header.appendChild(banner);
banner.setAttribute("src", "images/banner.jpg");
banner.className = "banner"; 

var logo = document.createElement("img"); // adding logo
var  headerLogo= document.querySelector("header div");
headerLogo.appendChild(logo);
logo.setAttribute("src", teamData.logoPath);
logo.className = ("logo");

var title = document.createElement("h1"); // adding team name
var  mainTitle= document.querySelector("main");
mainTitle.prepend(title);
title.textContent = teamData.teamName;
title.className = ("title");

document.getElementById("mainTeam").textContent = "MAIN TEAM"; // subheader
document.getElementById("reserveTeam").textContent = "RESERVE PLAYERS"; // subheader

for (var i = 0; i < 11; i++) { //adding main team
	var player = document.createElement("article");
	var  main = document.querySelector("div.main");
	main.appendChild(player);
	player.className = ("m" + i);

	var index = allPlayers[i];

	var strImage = "<img class='article' src='images/" + teamData.players[index].number + ".jpg'>";
	var strName = "<h3>" + teamData.players[index].name + "</h3>";
	var strNumber = "<br> Number: " + teamData.players[index].number;
	var strPosition = "<br> Position: " + teamData.players[index].position;
	var strAge = "<br> Age: " + teamData.players[index].age;

	player.innerHTML = strImage + strName + strNumber + strPosition + strAge;
};

for (var i = 0; i < 4; i++) { //adding reserve
	var player = document.createElement("article");
	var  main = document.querySelector("div.reserve");
	main.appendChild(player);
	player.className = ("r" + i);


	var index = bench[i];

	player.innerHTML = "<img class='article' src='images/" + teamData.players[index].number + ".jpg'>" +
	"<h3>" + teamData.players[index].name + "</h3>" +
	"<br> Number: " + teamData.players[index].number +
	"<br> Position: " + teamData.players[index].position +
	"<br> Age: " + teamData.players[index].age;
};

function change() {
	var fromMain = Math.floor(Math.random() * 11);
	var fromReserve = Math.floor(Math.random() * 4);
	// console.log("CHANGE");
	// console.log(allPlayers[fromMain] + 1, teamData.players[allPlayers[fromMain]].name);
	// console.log(bench[fromReserve] + 1, teamData.players[bench[fromReserve]].name);

	var temp = allPlayers[fromMain];
	allPlayers[fromMain] = bench[fromReserve];
	bench[fromReserve] = temp;

	var toResClass = "m" + fromMain
	var toRes = document.querySelector("." + toResClass);

	var toMainClass = "r" + fromReserve
	var toMain = document.querySelector("." + toMainClass);

	var tempSubst = toRes.innerHTML;
	toRes.innerHTML = toMain.innerHTML;
	toMain.innerHTML = tempSubst;
};

setInterval(change, 3000);

	// console.log("MAIN");
	// for (var i = 0; i < allPlayers.length; i++) {
	// 	console.log(allPlayers[i] + 1, teamData.players[allPlayers[i]].name);
	// };
	// console.log("RESERVE");
	// for (var i = 0; i < bench.length; i++) {
	// 	console.log(bench[i] + 1, teamData.players[bench[i]].name);
	// };
