
// Ищем класс с кнопкой
$('.header-btn').on('click', function(){
	$('.link-nav__item,.link-nav__icons,.close-btn').addClass('active');
})
$('.close-btn').on('click', function(){
	$('.link-nav__item,.link-nav__icons,.close-btn').removeClass('active');
})
;

