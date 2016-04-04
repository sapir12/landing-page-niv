"use strict"

var url = "http://localhost";
var port = 3333;

function send() {
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;

	if(name && email){
		var xhttp = new XMLHttpRequest();
		xhttp.open("POST", url + ":" + port + "/newClient", true);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send("name="+name+"&email="+email);
		alert("פרטייך נשלחו בהצלחה");
	} else {
		alert("אנא הזינו פרטים תקניים");
	}
}

function FitImageToScreen() {
	var image = document.getElementById("main-picture");
	if(image.length > 0){
		for(var i=0; i < image.length; i++){
		     if(image[i].width >= (window.innerWidth - 10)){
	         image[i].style.width = 'auto';
	       }
	    }
	}
}