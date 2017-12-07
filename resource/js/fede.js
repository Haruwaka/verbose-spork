myImage = new Array(
// 画像ファイル名の設定
"new1.jpg", "new2.jpg", "new3.jpg");

myNowCnt = -1;
// 現在表示している配列番号
myflg = 0;
// どっちを表示して、どっちを消すかのフラグ
function myChange(){
// スライドショーメイン関数
myNowCnt = (myNowCnt<myImage.length-1) ? myNowCnt+1 : 0;
// 次の配列番号
myflg = (myflg==0) ? 1 : 0;
// 表示・非表示フラグ反転
if (myflg == 0){
document.getElementById("slide_in").src = myImage[myNowCnt];
// 次の画像をセットする
document.getElementById("slide_in").className = "sImg";
// フェードイン
document.getElementById("slide_out").className = "sImg";
// フェードアウト
}else{
document.getElementById("slide_out").src = myImage[myNowCnt];
// 次の画像をセットする
document.getElementById("slide_in").className = "sImg";
// フェードアウト
document.getElementById("slide_out").className = "sImg";
// フェードイン
}
setTimeout( "myChange()" , 4000 );	// 4秒周期に画像を更新する
}