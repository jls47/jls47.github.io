function workClick(div) {
	
	var works = document.getElementsByClassName("subwork");
	console.log(works);
	var current = div.charCodeAt(0);
	console.log(current);
	for(var i = 0; i < works.length; i++) {
		console.log(works[i].id.charCodeAt(2) != current);
		if(works[i].id.charCodeAt(2) != current) {
			//Shrink the other divs to nothing
			works[i].style="width:0px;height:0px;font-size: 0px; border-width: 0px;";
		} else {
			works[i].style="width:800px;height:400px;margin-top:-50px;-webkit-transform: rotate(0deg);";
			works[i].setAttribute("onmouseleave", 'console.log("leaving");');
			works[i].setAttribute("onmouseenter", 'console.log("entering");');
			works[i].setAttribute("onclick", "leaveWork();event.stopPropagation();");
			var c = works[i].children[0];
			console.log(c);
			c.style="-webkit-transform: rotate(0deg);margin-top: 20%;";
		}
	}
	//Just add css transition to all others
	
}

function workHover(div) {
	var works = document.getElementsByClassName("subwork");
	console.log(works);
	var current = div.charCodeAt(0);
	console.log(current);
	for(var i = 0; i < works.length; i++) {
		if(works[i].id.charCodeAt(2) == current) {
			//Shrink the other divs to nothing
			works[i].style="background: black; color: white; height: 15vw; width: 15vw;";
		}
	}
}

function leaveWork() {
	var works = document.getElementsByClassName("subwork");
	for(var i = 0; i < works.length; i++) {
		works[i].style = "width: 200px;height: 200px;border-width: 1px;font-size: 35px;";
		works[i].setAttribute("onclick", "workClick('" + (i + 1) + "');");
		works[i].setAttribute
		works[i].setAttribute("onmouseleave", "leaveWork()");
		works[i].setAttribute("onmouseenter", "workHover('" + (i + 1) + "');");
		var c = works[i].children[0];
		console.log(c);
		c.style="-webkit-transform: rotate(-45deg);margin-top: 40%;";
	}
}