var image = new Array("new1.jpg", "new2.jpg", "new3.jpg");
var slide1 = document.getElementById("slide1");
var slide2 = document.getElementById("slide2");
var slide3 = document.getElementById("slide3");

count = 0;

Timer();

function Timer() {
	count++; 
	//画像の枚数確認
	if (count == image.length) count = 0; 
	//画像出力
	document.getElementById('slideImg').src = "resource/images/" + image[count];
	//次のタイマー呼びだし
	setTimeout("Timer()",5000); 
}

 slide1.onclick = function slide1(){
 	document.getElementById('slideImg').src = "resource/images/" + image[0];
 }

 slide2.onclick = function slide2(){
 	document.getElementById('slideImg').src = "resource/images/" + image[1];
 }

 slide3.onclick = function slide3(){
 	document.getElementById('slideImg').src = "resource/images/" + image[2];
 }