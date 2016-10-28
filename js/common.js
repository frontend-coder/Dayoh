$(document).ready(function() {
// вверхнее красиво-вращающееся меню
// 1 и 2 строка это анимация крестика
//3 строка - слайдер вниз меню
$(".toggle-mnu").click(function() {
$(this).toggleClass("on");
$(".top-menu").slideToggle();
return false;
});
// одинаковой высоты разные по длине ашки
 $("p.iner-text").equalHeights();

//Кнопка наверх с права от контента
$("body").append('<div class="top"><i class="fa fa-angle-double-up" aria-hidden="true"></i></div>');
// Заставляет кнопку работать как ссылку на самый вверх
$("body").on("click", ".top", function() {
	$("html, body").animate({scrollTop: 0}, "slow");
});
// Заставляет прятаться кнопку, если посетитель на хедере
$(window).scroll(function() {
if ($(this).scrollTop() > $(this).height()) {
	$(".top").addClass("active");
} else 
{  	$(".top").removeClass("active");
}
});

	$(".top-menu ul li a").mPageScroll2id({
		 layout:"auto",
		 offset:".top-line",
		scrollEasing: "linear",
		highlightByNextTarget: true,
		keepHighlightUntilNext: true,
		 autoScrollSpeed: true,
		scrollSpeed : 1000
	});

$(".owl-carousel").owlCarousel({
		loop:true,
		items: 1,
		margin:130,
		autoplay:true,
	    autoplayTimeout:1500,
	    autoplayHoverPause:true,
		stagePadding: 130,
		nav: true,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		navContainer: '#customNav', 
	});
//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/

$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".forms-calldecor .success").addClass("active");
			setTimeout(function() {
				// Done Functions
				$(".forms-calldecor .success").removeClass("active");
				th.trigger("reset");
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});
});