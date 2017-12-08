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
				var slider_thumb = $('<div class="slider_thumb"></div>');
				self.append(slider_thumb);

				findLi.each(function(i){
					slider_thumb.append('<a href="#" class="thumb'+(i+1)+'"></a>');
				});

				var pnPoint = slider_thumb.find('a'),
				pnFirst = slider_thumb.find('a:first'),
				pnLast = slider_thumb.find('a:last'),
				pnCount = slider_thumb.find('a').length;
				
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

				function switchNext(){
					var setActive = slider_thumb.find('.pnActive'),
					pnIndex = pnPoint.index(setActive),
					pnNum = pnIndex+1;

					if(pnCount == pnNum){
						pnFirst.click();
					} else {
						setActive.next('a').click();
					}
				}

				function switchPrev(){
					var setActive = slider_thumb.find('.pnActive'),
					pnIndex = pnPoint.index(setActive),
					pnNum = pnIndex+1;

					if(1 == pnNum){
						pnLast.click();
					} else {
						setActive.prev('a').click();
					}
				}


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