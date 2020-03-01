let root = document.querySelector('#root');
let search = document.querySelector('#btn');
search.addEventListener('click', function(){
	let count = root.childElementCount;
	if (root.childElementCount >= 1) {
		for (let i = 0; i < count; i++) {
			root.firstChild.remove();
		}
	}
	let input = document.querySelector('#input');
	if (input.value == '') {
		alert("Hey Hey! You forgot to write something.");
	}
	fetch(`https://api.giphy.com/v1/gifs/search?api_key=y64K1CZz5YaoMnjKcuty5SmjmO4VppZ3&q=${input.value}&limit=10&offset=0&rating=G&lang=en`)
	.then(responce => responce.json())
	.then(date =>{
		date.data.map(function(index){
			console.log(index);
			let div = document.createElement("div");
			let video = document.createElement("video");
			video.src = index.url;
			video.poster = index.images.original.url;
			div.append(video);
			root.append(div);
		})
    input.value = '';
	})
});	
