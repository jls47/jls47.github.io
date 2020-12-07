function workClick(div) {
	
	var works = document.getElementsByClassName("subwork");
	var current = div.charCodeAt(0);
	for(var i = 0; i < works.length; i++) {
		if(works[i].id.charCodeAt(2) != current) {
			//Shrink the other divs to nothing
			works[i].style="width:0px;height:0px;font-size: 0px; border-width: 0px;";
			
		} else {
			//Needs improved positioning after rotation
			var vw = window.innerWidth;
			if(vw > 800) {
			works[i].style=`width:60vw;height:100%;margin-top:-50px;-webkit-transform: rotate(0deg);
			top: -10%;left:10%;`;
			} else {
				works[i].style=`width:60vw;height:100%;margin-top:-50px;-webkit-transform: rotate(0deg);
				top: -10%;left:3%;`;
			}

			works[i].setAttribute("onclick", "leaveWork();event.stopPropagation();");
			var c = works[i].children[0];
			c.style="-webkit-transform: rotate(0deg);margin-top: 10%;";
         var txt = works[i].children[0].children[1];
         txt.style="display: inline; font-size: 20px;";
		}
			works[i].setAttribute("onmouseleave", 'console.log("leaving");');
			works[i].setAttribute("onmouseenter", 'console.log("entering");');
	}
	//Just add css transition to all others
	
}

function workHover(div) {
	var works = document.getElementsByClassName("subwork");
	var current = div.charCodeAt(0);
	for(var i = 0; i < works.length; i++) {
		if(works[i].id.charCodeAt(2) == current) {
            if(window.innerWidth < 900) {
               works[i].style="background: black; color: white; height: 30%; width: 30%; z-index: 100;";
            } else {
               works[i].style="background: black; color: white; height: 50%; width: 50%; z-index: 100;";
            }
			
		}
	}
}

function leaveWork() {
	var works = document.getElementsByClassName("subwork");
	for(var i = 0; i < works.length; i++) {
		works[i].style = "";
		works[i].setAttribute("onclick", "workClick('" + (i + 1) + "');");
		works[i].setAttribute
		works[i].setAttribute("onmouseleave", "leaveWork()");
		works[i].setAttribute("onmouseenter", "workHover('" + (i + 1) + "');");
		var c = works[i].children[0];
		c.style="margin-top: 40%;";
      var txt = works[i].children[0].children[1];
      txt.style="display: none;";
	}
}