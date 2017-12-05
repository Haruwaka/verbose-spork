var fontSizeS = document.getElementById('fontSizeS');
var fontSizeM = document.getElementById('fontSizeM');
var fontSizeL = document.getElementById('fontSizeL');


fontSizeS.onclick = function smaller(){
	document.body.style.fontSize = '50%';
}

fontSizeM.onclick = function middiam(){
	document.body.style.fontSize = '100%';
}

fontSizeL.onclick = function large(){
	document.body.style.fontSize = '150%';
}