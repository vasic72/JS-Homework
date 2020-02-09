var searchButton = document.querySelector(".search-button");

function getRecepies () {
	var req = new XMLHttpRequest();
	req.open("GET", "https://api.edamam.com/search?q=chicken&app_id=d3189e57&app_key=b1b7b4a7ef79b0e69b697d36f0f7dc26&from=0&to=3&calories=591-722&health=alcohol-free");

		req.send();
		console.log(req);
		console.log(req.responseText);
};

searchButton.addEventListener("click", getRecepies);
