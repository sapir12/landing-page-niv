"use strict"

var url = "http://localhost";
var port = 3333;

function send() {
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;

	var xhttp = new XMLHttpRequest();
	xhttp.open("POST", url + ":" + port + "/newClient", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send("name="+name+"&email="+email);
}


