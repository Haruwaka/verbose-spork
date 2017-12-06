var image = new Array("new1.jpg", "new2.jpg", "new3.jpg");
var slide1 = document.getElementById("slide1");
var slide2 = document.getElementById("slide2");
var slide3 = document.getElementById("slide3");
// スライドショー動く_bk
// 最初をslide1にするため
count = 0;

document.getElementById('fontImg').src = "resource/images/" + image[count];
// Timer();
function Timer() {
	alert("!");
	count++;
	if(count >= 2){
		count = 0 ;
	}
	document.getElementById('fontImg').src = "resource/images/" + image[count];
// 	//画像の枚数確認
// 	if (count == image.length) count = 0; 
// 	//画像出力
// 	document.getElementById('slideImg').src = "resource/images/" + image[count];
	//次のタイマー呼びだし
	// setTimeout("Timer()",5000); 
}

//////////////////
//アニメーション test//
/////////////////





// disp_out();
disp_in();

var speed = 200; // この値（ミリ秒）毎に画面が変わる
var tt_in = 650;
var tt_out = 0;
var pxa = 650; // X方向位置(Pixel)
var pya = 0; // Y方向位置(Pixel)
var stp = 5; // 1回移動量(Pixel)
var img_in = 0;
var img_out = 0;

//スライドin
function disp_in(){
	img_in +=  5;
	if(img_in >= 650) img_in=0;
	document.getElementById('slide_font').style.clip = 'rect(0,'+img_in+'px'+',300px,0px)';

  if(tt_in >= 5){
    setTimeout("disp_in()", speed);
  }
  else{
    tt_in = 650; 
    setTimeout("disp_in()", speed);  
  }

  tt_in = tt_in - stp;
  if(tt_in == -645){
  	setTimeout("Timer()",2000);
  }else{
	  move(tt_in); 	
	}
}

//スライドout
function disp_out(){
  if(tt_out >= -645){
    setTimeout("disp_out()", speed);
  }
  else{
    tt_out = 0; 
    setTimeout("disp_out()", speed);
  }

  tt_out = tt_out - stp;

  console.log(tt_out);
  if(tt_out == -645){
  	console.log(count);
  	setTimeout("Timer()",2000);
  }else{
	  move(tt_out); 	
	}
}





function move(t){
  pxa = t;  //  下に移動させる場合には　pya を変更する 

  document.getElementById("slide_font").style.left = pxa + ('px');
  document.getElementById("slide_font").style.top  = pya + ('px') ;
  // document.getElementById('slideImg').src = "resource/images/" + image[0];

}

////////////////
// test  end  //
////////////////



 slide1.onclick = function slide1(){
 	document.getElementById('slideImg').src = "resource/images/" + image[0];
 }

 slide2.onclick = function slide2(){
 	document.getElementById('slideImg').src = "resource/images/" + image[1];
 }

 slide3.onclick = function slide3(){
 	document.getElementById('slideImg').src = "resource/images/" + image[2];
 }