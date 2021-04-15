
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