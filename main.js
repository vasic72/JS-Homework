var movies = [
	{
		path: "img/alien.jpg",
		name: "ALIEN"
	},
	{
		path: "img/alien2.jpg",
		name: "ALIEN 2"
	},
	{
		path: "img/alien3.jpg",
		name: "ALIEN 3"
	},
	{
		path: "img/alien4.jpg",
		name: "ALIEN 4"
	},
	{
		path: "img/terminator.jpg",
		name: "TERMINATOR"
	},
	{
		path: "img/terminator2.jpg",
		name: "TERMINATOR 2"
	},
	{
		path: "img/terminator3.jpg",
		name: "TERMINATOR 3"
	},
	{
		path: "img/terminator4.jpg",
		name: "TERMINATOR 4"
	},
	{
		path: "img/predator.jpg",
		name: "PREDATOR"
	},
	{
		path: "img/predator2.jpg",
		name: "PREDATOR 2"
	},
	{
		path: "img/predator3.jpg",
		name: "PREDATOR 3"
	},
	{
		path: "img/aliensVSpredator.jpg",
		name: "ALIENS VS PREDATOR"
	}
];

// global vars
var strSearch;
var filtered=[];

 // initial fullfiling - all movies
for (var i = 0; i < movies.length; i++) {

	var movie = document.createElement("div");
	var  main = document.querySelector("div.list");
	main.appendChild(movie);
	
	var strImage = "<img class='slika' src=" + movies[i].path + ">";
	var strName = "<h3>" + movies[i].name + "</h3>";
//	var strRemove ="<img class='rem' src='img/remove.jpg'>";

	movie.innerHTML = strImage + strName //+ strRemove;
};


// change of input
var inp = document.querySelector("input");
inp.addEventListener("keyup", function(e){
	strSearch = e.target.value;
	filtered = searchMovie(movies);
	reload();
});

// filtering
function searchMovie(arr) {
	var result = arr.filter(function(item){
		return item.name.includes(strSearch.toUpperCase());
	});
	return result;
};

// fullfiling with filtered data
function reload() {
	// deleting all
	var  m = document.querySelectorAll("div.list div");
	for (var j = 0; j < m.length; j++) {
		m[j].remove();
	};
	// refilling  filtered movies
	for (var i = 0; i < filtered.length; i++) {

	var movie = document.createElement("div");
	var  main = document.querySelector("div.list");
	main.appendChild(movie);
	
	var strImage = "<img class='slika' src=" + filtered[i].path + ">";
	var strName = "<h3>" + filtered[i].name + "</h3>";
//	var strRemove ="<img class='rem' src='img/remove.jpg'>";
	movie.innerHTML = strImage + strName// + strRemove;
};

};
