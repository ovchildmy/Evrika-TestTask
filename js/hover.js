add_class();
add_underline();


// функция добавления класса окрашивания
function add_class() {
	var element = $(".js-add-class");

	element.hover(function(){
		$(this).addClass("color-gold");
	})

	element.mouseout(function(){
		$(this).removeClass("color-gold");
	})
}

// функция добавления класса подчёркивания
function add_underline() {
	var element = $(".js-add-underline");
	var children = element.children("*");
	var children_isHover = false;

	
	children_part();


	element.hover(function(){
		$(this).addClass("element_underlined");
	})

	element.mouseout(function(){
		console.log(children_isHover)
		if(!children_isHover){
			$(this).removeClass("element_underlined");
			children_isHover = false;
		}
	})

	
	function children_part(){
		children.mouseout(function(){
			children_isHover = false;
			console.log("child out");
		})	

		children.hover(function(){
			children_isHover = true;
			// console.log(children_isHover);
		})
	}
}