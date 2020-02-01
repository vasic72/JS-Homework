
var strSearch = 'akita';
getData();

var inp = document.querySelector("select");
inp.addEventListener("change", function(e){
	strSearch = e.target.value;
	getData();
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

setInterval(getData, 5000);



