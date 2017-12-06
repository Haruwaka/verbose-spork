var tabs = document.getElementById('tabcontrol').getElementsByTagName('a');
var pages = document.getElementById('tabbody').getElementsByTagName('div');

// var tag1 = document.getElementsByClassName('tab1');
// var tag2 = document.getElementsByClassName('tab2');
// var tag3 = document.getElementsByClassName('tab3');
// var tag4 = document.getElementsByClassName('tab4');


   // tabs[0].onclick = clickTab1;
   // tabs[1].onclick = clickTab2;
   // tabs[2].onclick = clickTab3;
   // tabs[3].onclick = clickTab4;

function clickTab1(){
   pages[0].style.display = "block";
   pages[1].style.display = "none";
   pages[2].style.display = "none";
   pages[3].style.display = "none";
   tabs[0].style.backgroundImage = 'url(resource/images/tab01_on.png)';
   tabs[1].style.backgroundImage = 'url(resource/images/tab02_off.png)';
   tabs[2].style.backgroundImage = 'url(resource/images/tab03_off.png)';
   tabs[3].style.backgroundImage = 'url(resource/images/tab04_off.png)';
   tabs[0].style.borderBottom = 'none';
}

function clickTab2(){
   pages[0].style.display = "none";
   pages[1].style.display = "block";
   pages[2].style.display = "none";
   pages[3].style.display = "none";
   tabs[0].style.backgroundImage = 'url(resource/images/tab01_off.png)';
   tabs[1].style.backgroundImage = 'url(resource/images/tab02_on.png)';
   tabs[2].style.backgroundImage = 'url(resource/images/tab03_off.png)';
   tabs[3].style.backgroundImage = 'url(resource/images/tab04_off.png)';
   tabs[1].style.borderBottom = 'none';

}

function clickTab3(){
   pages[0].style.display = "none";
   pages[1].style.display = "none";
   pages[2].style.display = "block";
   pages[3].style.display = "none";
   tabs[0].style.backgroundImage = 'url(resource/images/tab01_off.png)';
   tabs[1].style.backgroundImage = 'url(resource/images/tab02_off.png)';
   tabs[2].style.backgroundImage = 'url(resource/images/tab03_on.png)';
   tabs[3].style.backgroundImage = 'url(resource/images/tab04_off.png)';
   tabs[2].style.borderBottom = 'none';

}

function clickTab4(){
   pages[0].style.display = "none";
   pages[1].style.display = "none";
   pages[2].style.display = "none";
   pages[3].style.display = "block";
   tabs[0].style.backgroundImage = 'url(resource/images/tab01_off.png)';
   tabs[1].style.backgroundImage = 'url(resource/images/tab02_off.png)';
   tabs[2].style.backgroundImage = 'url(resource/images/tab03_off.png)';
   tabs[3].style.backgroundImage = 'url(resource/images/tab04_on.png)';
   tabs[3].style.borderBottom = 'none';

}

//最初は新着情報ページ
clickTab1();

function changeTab() {
      // href属性値から対象のid名を抜き出す
      var targetid = this.href.substring(this.href.indexOf('#')+1,this.href.length);

      // 指定のタブページだけを表示する
      for(var i=0; i<pages.length; i++) {
         if( pages[i].id != targetid ) {
            if(pages[0]){ tabs[0].onclick = clickTab1;}
            if(pages[1]){ tabs[1].onclick =  clickTab2;}
            if(pages[2]) {tabs[2].onclick =  clickTab3;}
            if(pages[3]){ tabs[3].onclick =  clickTab4;}
         }

      }
      // ページ遷移しないようにfalseを返す
      return false;
}




// すべてのタブに対して、クリック時にchangeTab関数が実行されるよう指定する
for(var i=0; i<tabs.length; i++) {
   tabs[i].onclick = changeTab;
}


