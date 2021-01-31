"use strict";

var $ = jQuery;

function eventHandler() {
	// JSCCommon.CustomInputFile(); 
	var x = window.location.host;
	var screenName;
	screenName = 'card.png';

	if (screenName && x === "localhost:3000") {
		document.body.insertAdjacentHTML("beforeend", "<div class=\"pixel-perfect\" style=\"background-image: url(screen/".concat(screenName, ");\"></div>"));
	}

	$('.menu-mobile__list .arrowDown').append('<div class="toggle-menu"></div>');
	$('.menu-mobile__list .arrowDown').on('click', '.toggle-menu', function () {
		$(this).parent().toggleClass('active').next().slideToggle();
	});
}

;

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
} // window.onload = function () {
// 	document.body.classList.add('loaded_hiding');
// 	window.setTimeout(function () {
// 		document.body.classList.add('loaded');
// 		document.body.classList.remove('loaded_hiding');
// 	}, 500);
// }