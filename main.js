let allPlayers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
	
let bench = []; //array of reserves
const random = Math.round(Math.random());  // One goalkeeper to the bench
bench[bench.length] = allPlayers[random];
allPlayers.splice(random, 1); // removing reserve from allPlayers

for (let i = 0; i < 3; i++) { // three players more to the bench
const random = Math.floor(Math.random() * (allPlayers.length - 1) + 1); //  + 1 to avoid second goalkeeper to the bench
bench[bench.length] = allPlayers[random];
allPlayers.splice(random, 1); // removing reserve from allPlayers
};

const banner = document.createElement("img"); // adding banner
const header = document.querySelector("header");
header.appendChild(banner);
banner.setAttribute("src", "images/banner.jpg");
banner.className = "banner"; 

const logo = document.createElement("img"); // adding logo
const headerLogo = document.querySelector("header div");
headerLogo.appendChild(logo);
logo.setAttribute("src", teamData.logoPath);
logo.className = ("logo");

const title = document.createElement("h1"); // adding team name
const  mainTitle= document.querySelector("main");
mainTitle.prepend(title);
title.textContent = teamData.teamName;
title.className = ("title");

document.getElementById("mainTeam").textContent = "MAIN TEAM"; // subheader
document.getElementById("reserveTeam").textContent = "RESERVE PLAYERS"; // subheader

for (let i = 0; i < 11; i++) { //adding main team
	let player = document.createElement("article");
	let  main = document.querySelector("div.main");
	main.appendChild(player);
	player.className = ("m" + i);

	let index = allPlayers[i];

	let strImage = `<img class='article' src='images/${teamData.players[index].number}.jpg'>`;
	let strName = `<h3>${teamData.players[index].name}</h3>`;
	let strNumber = `<br> Number: ${teamData.players[index].number}`;
	let strPosition = `<br> Position: ${teamData.players[index].position}`;
	let strAge = `<br> Age: ${teamData.players[index].age}`;

	player.innerHTML = strImage + strName + strNumber + strPosition + strAge;
};

for (let i = 0; i < 4; i++) { //adding reserve
	let player = document.createElement("article");
	let  main = document.querySelector("div.reserve");
	main.appendChild(player);
	player.className = ("r" + i);

	let index = bench[i];

	let strImage = `<img class='article' src='images/${teamData.players[index].number}.jpg'>`;
	let strName = `<h3>${teamData.players[index].name}</h3>`;
	let strNumber = `<br> Number: ${teamData.players[index].number}`;
	let strPosition = `<br> Position: ${teamData.players[index].position}`;
	let strAge = `<br> Age: ${teamData.players[index].age}`;

	player.innerHTML = strImage + strName + strNumber + strPosition + strAge;
};

let change = ()  => {
	let fromReserve;
	let fromMain = Math.floor(Math.random() * 11);
		if  (fromMain === 0) { // check if it is goalkeeper
			fromReserve = 0 // subst with goalkeeper
		} else {
			fromReserve = Math.floor(Math.random() * 3) + 1; // any player except goalkeeper
		};

		console.log(fromMain, fromReserve)
	
	let temp = allPlayers[fromMain];
	allPlayers[fromMain] = bench[fromReserve];
	bench[fromReserve] = temp;

	let toReserve = document.querySelector(`.m${fromMain}`);
	let toMain = document.querySelector(`.r${fromReserve}`);

	let tempSubst = toReserve.innerHTML;
	toReserve.innerHTML = toMain.innerHTML;
	toMain.innerHTML = tempSubst;
};

setInterval(change, 3000);
