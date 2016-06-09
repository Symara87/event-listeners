// GO!

var navMenuNode = document.querySelector(".nav-menu")
//found menu node//
var buttonNode = document.querySelector("#navButton")
//found button node//

var navMenuState = {
 menuShowing: true
}

var toggle = function(){
	if (navMenuState.menuShowing === true) {
		navMenuNode.style.opacity = 0
		navMenuState.menuShowing = false 
	}
	else{
		navMenuNode.style.opacity = 1
		navMenuState.menuShowing = true
	}

}

buttonNode.addEventListener("click",toggle)


