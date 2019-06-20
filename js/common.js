//активация кнопок в Ленте
$(document).ready(function() {
	var $button = $('.orange_btn');
		$buttonWrap = $('.orange_btn_wrap');
	$button.on('click', function() {
		if ($button.hasClass('active_btn'))
			$button.removeClass('active_btn');
			$button.css("color", "");
		$(this).toggleClass('active_btn');
		$(this).css("color", "#FA9D4E");
	});
});

//активация кнопок в профиле пользователя
$(document).ready(function() {
	var $link = $('.tabs_link');
		$item = $('.tabs_item');
	$link.on('click', function() {
		if ($item.hasClass('active_tab')) {
			$item.removeClass('active_tab');
			$link.css("color", "");
		}
		$(this).toggleClass('active_tab');
		$(this).css("color", "#373738");
	});
});

//текст в placeholder исчезает при нажатии
$(document).ready(function() {
	var $placeholder = $('.holder_off');
	$placeholder.focus(function() {
		$(this).attr('placeholder', '');
	});
	$placeholder.blur(function() {
		$(this).attr('placeholder', $(this).data('placeholder'));
	});
});

//всплывающее меню "Направления"
$(document).ready(function(){
	var $placeMenu = $('.place_down_mnu');
		$button = $('.btn_place_filter');
	$button.on('click', function() {
		if ($placeMenu.hasClass('hidden_mnu')) {
			$placeMenu.fadeIn(90);
			$placeMenu.toggleClass('hidden_mnu');
			$button.toggleClass('btn_hover');
		} else {
			$placeMenu.fadeOut(90);
			$placeMenu.toggleClass('hidden_mnu');
			$button.toggleClass('btn_hover');
		}
	});

});

//смена страниц в paginator
$(document).ready(function(){
	var $pageList = $('.paginator');
		$page = $('.paginator_item');
		$pageLink = $('.paginator_item_link');
		$next = $('.paginator_item_next');
		$prev = $('.paginator_item_prev');
	$pageLink.on('click', function() {
		if($pageId = "current")
			$pageLink.removeAttr("id");
		$(this).attr('id', 'current');
	});
	//доделать!! переключение стр кнопкой "Следующая"
	$next.on('click', function() {
		$pageList.children('#current').next().attr('id', 'current');

	});
});


$(document).ready(function() {
	var $reviewBlock = $('.for_who_content_list_item');
		$reviewIMG = $('.review_img');
		$reviewCont = $('.review_content');
		$parent = $('.for_who_review_fluid');
	$reviewBlock.mouseover(function() {
		$(this).addClass("animated flipOutY").delay(750).queue(function () {
			$reviewIMG.toggleClass('review_active'); 
			$reviewCont.toggleClass('review_active');
			$(this).removeClass("animated flipOutY"); 
			$(this).addClass("animated flipInY"); 
		});
	});
});

/* //всплывающие вопросы в faq
$(document).ready(function() {
	var $arrowBtn = $('.arrow_btn');
		$questCont = $('.question_cont');
	$arrowBtn.on('click', function() {
		$questCont.toggleClass('hidden_quest');
		$questCont.toggleClass('animated slideInUp');
	});
});
*/

$(document).ready(function() {
	var $arrowBtn = $('.arrow_btn');
		$questCont = $('.question_cont');
		$questBlock = $('.question_content');
	$arrowBtn.on('click', function() {
		$(this).prev($questCont).toggleClass('hidden_quest');
	});
});

/*
$(document).ready(function() {
	var $userAvatar = $('#user_link');
		$userMenu = $('#user_menu');
	$userAvatar.mouseover(function() {
		$userMenu.fadeIn(150);
	});
	$userAvatar.mouseout(function() {
		$userMenu.fadeOut(150);
	});

	$userMenu.mouseover(function() {
		$(this).css
	});
});

$(document).ready(function() {
	var $userAvatar = $('#user_cont');
		$userMenu = $('#user_menu');

	$userAvatar.mouseover(function() {
		$userMenu.fadeIn(200);
	});
});
*/
