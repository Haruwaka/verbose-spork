var image = new Array("new1.jpg", "new2.jpg", "new3.jpg");
var slide1 = document.getElementById("slide1");
var slide2 = document.getElementById("slide2");
var slide3 = document.getElementById("slide3");
// スライドショー動く_bk
// 最初をslide1にするため
count = 0;



var in_img = document.getElementsByClassName('sImg')[0];
var out_img = document.getElementsByClassName('sImg')[1];



 in_img.src = "resource/images/" + image[count+1];
 out_img.src = "resource/images/" + image[count];



function stop(){
  console.log("stop!!");

  document.getElementById('slideImg').src = "resource/images/" + image[count];

  document.getElementById('slide_in').style.visibility  = 'hidden';
  document.getElementById('slide_out').style.visibility  = 'hidden';
  // stopImage.src = "resource/images/" + image[count];
}

disp_in();
disp_out();

// Timer();
function Timer() {
	// alert("!");

  // setTimeout("stop()",5000);
  // document.getElementById('slide_in').style.visibility  = 'visible';
  // document.getElementById('slide_out').style.visibility  = 'visible';
	count++;
  countAdd = count-1;


	if(count > 2) count = 0 ;
  if(countAdd > 2) countAdd = 0;

  console.log('in_image count:     ' ,count);
  console.log('out_image count:' ,countAdd);

  in_img.src = "resource/images/" + image[count];
  out_img.src = "resource/images/" + image[countAdd];


  // setTimeout("stop()",5000);
	// document.getElementById('fontImg').src = "resource/images/" + image[count];
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


var speed = 50; // この値（ミリ秒）毎に画面が変わる
var tt_in = 650;
var tt_out = 0;
var pxa = 650; // X方向位置(Pixel)
var pya = 0; // Y方向位置(Pixel)
var stp = 5; // 1回移動量(Pixel)
var img_in = 0;
var img_out = 0;

//スライドin
function disp_in(){
	img_in +=  stp;
	if(img_in >= 650) img_in = 0;
	document.getElementById('slide_in').style.clip = 'rect(0px,'+img_in+'px,300px,0px)';

  if(tt_in >= 5){
    setTimeout("disp_in()", speed);
  }
  else{
    tt_in = 650; 
    setTimeout("disp_in()", speed);  
  }

  tt_in = tt_in - stp;
  if(tt_in == -650){
  	setTimeout("Timer()",100);
  }else{
	  move_in(tt_in); 	
	}
}

//スライドout
function disp_out(){
  if(img_out >= 650) img_out = 0;
  img_out +=  stp;
  document.getElementById('slide_out').style.clip = 'rect(0px,650px,300px,'+img_out+'px)';

  if(tt_out > -650){
    setTimeout("disp_out()", speed);
  }
  else{
    tt_out = 0; 
    setTimeout("disp_out()", speed);
  }

  tt_out = tt_out - stp;

  console.log("tt_out:",tt_out);
  if(tt_out == -650){
  	setTimeout("Timer()",100);
  }else{
	  move_out(tt_out); 	
	}
}



function hoge(){
  alert("!!!");
}



function move_in(t){
  pxa = t;  //  下に移動させる場合には　pya を変更する 

  document.getElementById("slide_in").style.left = pxa + ('px');
  document.getElementById("slide_in").style.top  = pya + ('px') ;
  // document.getElementById('slideImg').src = "resource/images/" + image[0];
}

function move_out(t){
  pxa = t;  //  下に移動させる場合には　pya を変更する 

  document.getElementById("slide_out").style.left = pxa + ('px');
  document.getElementById("slide_out").style.top  = pya + ('px') ;
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