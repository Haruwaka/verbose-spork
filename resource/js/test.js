////////////////////////////////////////
//　SCRIPT
////////////////////////////////////////
$(function(){
	var setElm = $('.main_slide'),
	fadeSpeed = 1000,
	switchDelay = 5000;

	$(window).load(function(){
		setElm.each(function(){
			var self = $(this),
			findUl = self.find('ul'),
			findLi = findUl.find('li'),
			findLiFirst = findUl.find('li:first'),
			findLiCount = findLi.length,
			findImg = findLi.find('img'),
			fadeTimer;

			findLi.css({display:'block',opacity:'0',zIndex:'99'});

			function areaHeight(){
				var imgHeight = findImg.height();

				self.css({height:imgHeight});
				findUl.css({height:imgHeight});
				findLi.css({height:imgHeight});
			}
			$(window).on('resize', function(){areaHeight();});
			areaHeight();

			findLiFirst.addClass('mainActive').css({zIndex:'100'}).stop().animate({opacity:'1'},fadeSpeed);

			findLi.each(function(i){
				$(this).attr('class','viewList' + (i + 1));
			});

			if(findLiCount > 1){
				// ページネーション
				var pagination = $('<div class="pagiNation"></div>');
				self.append(pagination);

				findLi.each(function(i){
					pagination.append('<a href="javascript:void(0);" class="pn'+(i+1)+'"></a>');
				});

				var pnPoint = pagination.find('a'),
				pnFirst = pagination.find('a:first'),
				pnLast = pagination.find('a:last'),
				pnCount = pagination.find('a').length;
				
				pnFirst.addClass('pnActive');

				pnPoint.click(function(){
					timerStop();
					var setNum = pnPoint.index(this),
					showCont = setNum+1;
					findUl.find('.viewList' + (showCont)).addClass('mainActive').stop().animate({opacity:'1'},fadeSpeed,function(){$(this).css({zIndex:'100'});});
					findUl.find('.viewList' + (showCont)).siblings().removeClass('mainActive').stop().animate({opacity:'0'},fadeSpeed,function(){$(this).css({zIndex:'99'});});
					pnPoint.removeClass('pnActive');
					$(this).addClass('pnActive');
					timerStart();
				});

				// サイドナビボタン
				self.append('<a href="javascript:void(0);" class="btnPrev"></a><a href="javascript:void(0);" class="btnNext"></a>');
				var btnNext = self.find('.btnNext'),
				btnPrev = self.find('.btnPrev');

				function switchNext(){
					var setActive = pagination.find('.pnActive'),
					pnIndex = pnPoint.index(setActive),
					pnNum = pnIndex+1;

					if(pnCount == pnNum){
						pnFirst.click();
					} else {
						setActive.next('a').click();
					}
				}

				function switchPrev(){
					var setActive = pagination.find('.pnActive'),
					pnIndex = pnPoint.index(setActive),
					pnNum = pnIndex+1;

					if(1 == pnNum){
						pnLast.click();
					} else {
						setActive.prev('a').click();
					}
				}

				btnNext.click(function(){switchNext();});
				btnPrev.click(function(){switchPrev();});

				function timerStart(){
					fadeTimer = setInterval(function(){
						switchNext();
					},switchDelay);
				}
				timerStart();

				function timerStop(){
					clearInterval(fadeTimer);
				}
			}
		});
	});
});