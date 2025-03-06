$(function () {
	// 輪播
	$('.first_page_img').each(function () {
		let slideImgs = $(this).find('img'),
			slideImgsCount = slideImgs.length,
			currentIndex = 0;
		slideImgs.eq(currentIndex).fadeIn();
		setInterval(showNextSlide, 7000);
		function showNextSlide() {
			let nextIndex = (currentIndex + 1) % slideImgsCount;
			console.log(nextIndex);
			slideImgs.eq(currentIndex).fadeOut();
			slideImgs.eq(nextIndex).fadeIn();
			currentIndex = nextIndex;
		}
	});

	// 回頂部
	$('.back_top').on('click', function (event) {
		$('html, body').animate(
			{
				scrollTop: 0
			},
			500 // 回頂部時間為 500 毫秒
		);
	});
	//首頁字體
	$('.first_page_word span').textillate({
		loop: true,
		in: {
			effect: 'rotateIn',
			delayScale: 1.5,
			delay: 50,
			sync: false,
			reverse: false,
			shuffle: false
		}
	});
	//畫面滑出
	let showheight = 300;
	$('.news_block').css({
		display: 'flex',
		opacity: 0
	});
	$(window).scroll(function () {
		if ($(window).width() >= 1280) {
			$('.news_block').each(function () {
				let newTop = $(this).offset().top;
				//newTop = .this(.news_block)與螢幕的距離(offset()=與螢幕的距離)//後面的.top不用加小括號，指物件和螢幕上面的距離
				console.log(newTop);
				if ($(window).scrollTop() >= newTop + showheight - $(window).height()) {
					//$(window).scrollTop() //滾動視窗的垂直滾動距離。
					//當window滾動視窗的垂直滾動距離大於或等於(.new_top與螢幕的距離 + showheight(500)- $(window)的高度)
					$(this).animate({
						dispaly: 'flex',
						opacity: 1
					});
					// $(this).css({dispaly: 'flex',}).fadeTo(3000,1)
				}
			});
		} else {
			$('.news_block').css({
				dispaly: 'block',
				opacity: 1
			});
		}
	});
});
