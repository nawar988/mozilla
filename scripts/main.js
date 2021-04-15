
let myImage = document.querySelector('img');
myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/Ann2.jpg') {
		myImage.setAttribute('src','images/anger1.jpg');
		alert("Don't touch my baby!");
	}
	else {
		myImage.setAttribute('src','images/Ann2.jpg');
	}
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
	let myName = prompt('Who are you?');
	localStorage.setItem('name', myName);
	myHeading.textContent = myName + ' I love youuu!!';
}
if(!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = storedName + ' I love youuu!!';
}
myButton.onclick = function() {
	setUserName();
}
