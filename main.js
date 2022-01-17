function workClick(div) {
	
	var works = document.getElementsByClassName("subwork");
	for(var i = 0; i < works.length; i++) {
		let id = works[i].id.charCodeAt(2) - 48;
		if(id != div) {
			//Shrink the other divs to nothing
			works[i].style="width:0px;height:0px;font-size: 0px; border-width: 0px;";
			
		} else {
			//Needs improved positioning after rotation
			var vw = window.innerWidth;
			if(vw > 900) {
				works[i].style=`width:60vw;height:100%;margin-top:-50px;
				top: -10%;left:10%; animation: none;`;
			} else {
				works[i].style=`width:60vw;height:100%;margin-top:-50px;background:black;color:white;
				top: -10%;left:3%; animation: none;`;
			}

			works[i].setAttribute("onclick", "leaveWork("+div+");event.stopPropagation();");
			var c = works[i].children[0];
			c.style="margin-top: 10%;";
         var img = c.children[0];
         img.style="width: 20%";
         var txt = c.children[1];
         txt.style="display: inline; font-size: 20px;";
		}
			works[i].setAttribute("onmouseleave", 'console.log("leaving");');
			works[i].setAttribute("onmouseenter", 'console.log("entering");');
	}
	//Just add css transition to all others
	
}

function techHover(num) {
	let hrefs = ["cpprev.png", "jsrev.png", "pythonrev.png", "reactrev.png", "postgresrev.png", "nodejsrev.webp"];
	document.getElementsByClassName("techused")[0].children[num].children[0].src = hrefs[num];
}

function techLeave(num) {
	let hrefs = ["cpp.png", "js.png", "python.png", "react.png", "postgres.png", "nodejs.webp"];
	document.getElementsByClassName("techused")[0].children[num].children[0].src = hrefs[num];
}

function workHover(div) {
	var works = document.getElementsByClassName("subwork");

	if(window.innerWidth < 900) {
      works[div - 1].style="background: black; color: white; height: 30%; width: 30%; z-index: 100; animation: none;";
   } else {
      works[div - 1].style="background: black; color: white; height: 60%; width: 60%; z-index: 100; animation: none;";
   }
	
}

function leaveWork(div) {
	var works = document.getElementsByClassName("subwork");

	for(var i = 0; i < works.length; i++) {
		
		works[i].style = "";
		works[i].setAttribute("onclick", "workClick('" + (i + 1) + "');");
		works[i].setAttribute
		works[i].setAttribute("onmouseleave", "leaveWork()");
		works[i].setAttribute("onmouseenter", "workHover('" + (i + 1) + "');");
		
		var c = works[i].children[0];
		c.style="margin-top: 40%;";
      var img = c.children[0];
      img.style="width:30%";
      var txt = c.children[1];
      txt.style="display: none;";
	}
	
}