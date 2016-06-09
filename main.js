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




var inputNode = document.querySelector('input[type="text"]')
// grabbed input node 
var ulGuestNode = document.querySelector(".guest-list")
//grabbed ulNode

 
 var addGuest = function(guestObject){
         if(guestObject.keyCode === 13){
           var userInput = inputNode.value
           var liNode = document.createElement("li")
           ulGuestNode.appendChild(liNode)
           liNode.innerHTML = userInput
           inputNode.value = ""
           }
         }




//created liNode
inputNode.addEventListener('keydown',addGuest)
//telling inputNode to listen for 'keydown' and when it hears it to execute function


