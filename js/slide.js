var bar = $(".nav__adaptive-bars");
var header_arrow = $(".header__adaptive-arrow");
var points = $(".main__preview_right__slider-wrapper__points-wrapper__item");
var arrows = $(".main__template__slider-wrapper__arrow");
var counter = 4; // счётчик нажатий на стрелку (arrow) (итерация)
// равен 4 из-за отображения 4 элементов на странице на пк

points.on("click", function () {
	var data_slide = $(this).data("slide");
	var wrapper_width = parseInt($(".js-preview-slider").css("width"));
	var slider = $(".main__preview_right__slider-inner");
	var distance = -wrapper_width * data_slide; // 1200 - ширина картинки

	// поменять точки
	var act_text = "main__preview_right__slider-wrapper__points-wrapper__item_active";
	var active = $("." + act_text);
	active.removeClass(act_text);
	$(this).addClass(act_text);

	slider.animate({
		"margin-left": distance
	},1500);
})

arrows.on("click", function(){
	var items_count; // зависит от разрешения. На пк - 4, на телефоне - 1
	var window_width = window.innerWidth;
	var wrapper = $(this).siblings(".main__template__slider-wrapper");
	var inner = wrapper.children(".main__template__slider-inner");
	var small_slider = (inner.hasClass("main__template__slider-inner_small") ? true : false);
	var slides = inner.data("slides"); 
	var children_count;
	if(!small_slider){
		if(window_width > 1440){
			items_count = 4;
		} else if(window_width > 1050){
			items_count = 3;
		} else if(window_width > 690){
			items_count = 2;
		} else{
			items_count = 1;
		}
	} else {
		if(window_width > 1492){
			items_count = 4;
		} else if(window_width > 1050){
			items_count = 3;
		} else if(window_width > 690){
			items_count = 2;
		} else {
			items_count = 1;
		}
	}
	(slides == 0 ? slides += items_count : false);
	if(small_slider){
		children_count = inner.children(".js-slider-item").length;
	} else {
		children_count = inner.children("a").children(".js-slider-item").length;
	}
	var dir = $(this).data("direction");
	var distance = (small_slider ? 280 : 331);

	if(dir == "left"){
		if(slides > items_count){
			slides--;
			inner.data("slides", slides);
			inner.animate({
				"margin-left": "+=" + distance
			})
		}
	} else {
		if(slides < children_count){
			slides++;
			inner.data("slides", slides);
			inner.animate({
				"margin-left": "-=" + distance
			})
		}
	}
})

//nav slide
bar.on("click", function(){
	var list = $(".nav__list");

	list.slideToggle();
})

//header slide
header_arrow.on("click", function(){
	var topbar = $(".header__topbar");

	$(this).children("i").toggleClass("fa-angle-double-down");
	$(this).children("i").toggleClass("fa-angle-double-up");
	topbar.slideToggle();
})