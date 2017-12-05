var tabs = document.getElementById('tabcontrol').getElementsByTagName('a');
var pages = document.getElementById('tabbody').getElementsByTagName('div');
var tag1 = document.getElementsByClassName('tab1');
var tag2 = document.getElementsByClassName('tab2');
var tag3 = document.getElementsByClassName('tab3');
var tag4 = document.getElementsByClassName('tab4');

function changeTab() {
      // href属性値から対象のid名を抜き出す
      var targetid = this.href.substring(this.href.indexOf('#')+1,this.href.length);

      // 指定のタブページだけを表示する
      for(var i=0; i<pages.length; i++) {
         if( pages[i].id != targetid ) {
            pages[i].style.display = "none";
         }
         else {
            pages[i].style.display = "block";
         }
      }
      // ページ遷移しないようにfalseを返す
      return false;
}

// すべてのタブに対して、クリック時にchangeTab関数が実行されるよう指定する
for(var i=0; i<tabs.length; i++) {
    tabs[i].onclick = changeTab;
}

// 最初は先頭のタブを選択
tabs[0].onclick();
tabs[0].focus();



