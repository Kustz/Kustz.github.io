AOS.init({
	once: true,
	duration: 600,
	disable: function() {
		var maxWidth = 768;
		return window.innerWidth < maxWidth;
	}
});

$(function(){

	lightbox.option({
		'albumLabel': "圖片 %1/%2",
		'alwaysShowNavOnTouchDevices': true,
		'disableScrolling': true
	})

	/*------------------*/

	let scrollVal = $(this).scrollTop();

	let checkScroll = ()=>{
		// if(scrollVal>($(window).height()/8)) {
		// 	$('.g_header').addClass('is_shrink');
		// }else{
		// 	$('.g_header').removeClass('is_shrink');
		// }
		if(scrollVal>($(window).height())) {
			$('.fixed_btn').addClass('is_show');
		}else{
			$('.fixed_btn').removeClass('is_show');
		}
	};

	checkScroll();

	let counterTri = true;

	$(window).scroll(()=>{
		scrollVal = $(this).scrollTop()
		checkScroll();
	})

	var $scrollTopNow = 0,
		$body = $("html, body");

	function bScroll(tarTop, aniDuration) {
		$body.animate({
			scrollTop: tarTop
		}, aniDuration);
	}

	$('.js_page_scroll').on('click', function(e) {
		$scrollTopNow = $('html, body').scrollTop();
		var $tar = $(this),
			$tarTop = $($tar.attr('href')).offset().top-60,
			$aniDuration = Math.abs($tarTop-$scrollTopNow)*.6 > 1000 ? 1000 : (Math.abs($tarTop-$scrollTopNow)*.6);
		bScroll($tarTop, $aniDuration);
		e.preventDefault();
	});
	
	$('.js_scroll_top').on('click', function(e) {
		bScroll(0, 100);
		e.preventDefault();
	});

	$('.aside_trigger').on('click', function(e) {
		$('.g_aside').addClass('m_show');
	})
	$('.aside_close').on('click', function(e) {
		$('.g_aside').removeClass('m_show');
	})

})