$(function () {
	sideMenu();
	dropdown();
	tabBox();
	popup();
	mainHeight();
});

mainHeight = function () {
	var bottomNaviHei = $('.navigation').outerHeight();

	$('.hiden_navi_box').css({'height': bottomNaviHei});
};

sideMenu = function () {
	$('.btn_menu').click(function () {
		$('.side_menu').addClass('active');
	});
	$('.side_menu .btn_close').click(function () {
		$('.side_menu').removeClass('active');
	});
};

tabBox = function () {
	$('.tab_menu > ul > li').eq(0).addClass('active');
	$('.tab_content > div').hide().eq(0).show();

	$('.tab_menu > ul > li').click(function () {
		let target = $(this);
		let index = target.index();

		$('.tab_menu > ul > li').removeClass('active');
		target.addClass('active');
		$('.tab_content > div').css('display', 'none');
		$('.tab_content > div').eq(index).css('display', 'flex');
	});
};

dropdown = function () {
	$('.depth1 h2').click(function () {
		var depth2 = $(this).parents('.depth1 li').children('.depth2');

		$(this).toggleClass('active');

		if ($(this).hasClass('active')) {
			depth2.addClass('active');
			$(this).find('.btn_dropdown').attr('class', 'ph-caret-up-thin btn_dropdown');
		} else {
			depth2.removeClass('active');
			$(this).find('.btn_dropdown').attr('class', 'ph-caret-down-thin  btn_dropdown');
		}
	});
};

popup = function () {
	// 팝업 열기
	$(document).on("click", ".popup_open", function (e){
		var target = $(this).attr("data-open");
		$(target).addClass("active");
	});

	$(document).on("click", ".popup_close", function (e){
		var target = $(this).parents("div.popup_wrap");
		$(target).removeClass("active");
	});

	// 외부영역 클릭 시 팝업 닫기
	$(document).mouseup(function (e){
		var LayerPopup = $(".popup_wrap");
		if(LayerPopup.has(e.target).length === 0){
			LayerPopup.removeClass("active");
		}
	});
}

tabBox = function () {
	$('.tab_menu > ul > li').eq(0).addClass('active');
	$('.tab_content > div').hide().eq(0).show();

	$('.tab_menu > ul > li').click(function () {
		let target = $(this);
		let index = target.index();

		$('.tab_menu > ul > li').removeClass('active');
		target.addClass('active');
		$('.tab_content > div').css('display', 'none');
		$('.tab_content > div').eq(index).css('display', 'flex');
	});
};

