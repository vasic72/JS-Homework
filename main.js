var searchButton = document.querySelector(".search button");
var videoList = document.querySelector('.video-list');
var videoPreview = document.querySelector('.video-preview');
var related = document.querySelector('.related');
var key = 'AIzaSyBdbFC8rJEwon-CJ9uYP2ouC32_3iwdLzQ';

function onSearch () {
	var searchField = document.querySelector(".search input");
	searchField.value && getVideos(searchField.value);
	searchField.value = '';
};

function getVideos (searchValue) {
	var req = new XMLHttpRequest();
	req.open("GET", "https://www.googleapis.com/youtube/v3/search?part=snippet&&maxResults=25&q=" + searchValue + '&key=' + key);
	req.onload = function () {
		listVideos(JSON.parse(req.responseText).items);
	};
	req.send();
};

function getRelatedVideos (idValue) {
	var req = new XMLHttpRequest();
	req.open("GET", "https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=" + idValue + '&type=video&key=' + key);
	req.onload = function () {
		listRelatedVideos(JSON.parse(req.responseText).items);
	}
	req.send();
};

function listVideos (videos) {
	videoList.innerHTML = '';
	videos.forEach(function(video) {
		addVideo(video);
	});
};

function listRelatedVideos (videos) {
	videoList.innerHTML = '';
	videos.forEach(function(video) {
		addRelatedVideo(video);
	});
};
	
function addVideo(videoData) {
	var videoElement = document.createElement("div");
	videoElement.setAttribute("class", "inline");
	var img = '<img src = "' + videoData.snippet.thumbnails.medium.url + '"/>';
	var title = '<div><h3>' + videoData.snippet.title + '</h3>' +
		'<p>' + videoData.snippet.description + '</p></div>'
		videoElement.innerHTML = img + title;
	videoList.appendChild(videoElement);

	videoElement.querySelectorAll('h3, img').forEach(function(element){
		element.addEventListener('click', function() {
		openVideo(videoData.id.videoId);

		});
	});
};

function openVideo(id){
	videoPreview.innerHTML = '<iframe width="100%" height="400px" src="https://www.youtube.com/embed/' + id + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
	videoList.innerHTML = '';
	getRelatedVideos (id);
	related.innerHTML = '<hr><h2>Related Videos</h2>';
};

function addRelatedVideo(videoData) {
	var videoElement = document.createElement("div");
	videoElement.setAttribute("class", "inline");
	var img = '<a href="http://www.youtube.com/watch?v=' + videoData.id.videoId  +
		'"><img src = "' + videoData.snippet.thumbnails.medium.url + '"/></a>';
	var title = '<div><h3>' + videoData.snippet.title + '</h3>' + '</p></div>'
		videoElement.innerHTML = img + title;
	videoList.appendChild(videoElement);
	console.log(videoData.id.videoId);
};

 // init
searchButton.addEventListener("click", onSearch);