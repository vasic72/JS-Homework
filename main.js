
var strSearch = 'akita';
getData();
var x = setInterval(getData, 3000);

var inp = document.querySelector("select");
inp.addEventListener("change", function(e){
	strSearch = e.target.value;
	clearInterval(x);
	getData();
	x = setInterval(getData, 3000);
});

function getData(){
var newRequest = new XMLHttpRequest();
newRequest.open('GET', 'https://dog.ceo/api/breed/' + strSearch + '/images/random');
newRequest.send();
newRequest.onload = function(){
	path = JSON.parse(newRequest.responseText).message;
	console.log(path);
	document.querySelector(".dog").setAttribute("src", path);
	document.getElementById('p').textContent = 'Random image of ' + strSearch;
	};
};



