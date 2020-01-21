var imgPaths = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg"];

function slide() {
	imgPaths.push(imgPaths.shift());
	document.querySelector("img").setAttribute("src", imgPaths[0]);

	var x = document.querySelectorAll(".thumbs img");
	index = imgPaths[0][4] - 1;

	x.forEach(function(item){
		item.classList.remove("focus");
	});
	
	x[index].className = "focus";
};

setInterval(slide, 2000);
