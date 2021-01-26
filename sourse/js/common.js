

const $ = jQuery;

function eventHandler() {
	
	// JSCCommon.CustomInputFile(); 
	var x = window.location.host;
	let screenName;
	screenName = 'contact.png';
	if (screenName && x === "localhost:3000") {
		document.body.insertAdjacentHTML("beforeend", `<div class="pixel-perfect" style="background-image: url(screen/${screenName});"></div>`);
	}

	if ($("div").is(".contacts-page__map")) {
		ymaps.ready(function () {
			 var myMap = new ymaps.Map('map', {
				  center: [55.72259807, 37.7027955],
				  zoom: 9,
				  controls: []
			 }, {
				  searchControlProvider: 'yandex#search'
			 }),
				  myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
				  }, {
						iconLayout: 'default#image',
						// Своё изображение иконки метки.
						iconImageHref: '../assets/images/map-marker.png',
						// Размеры метки.
						iconImageSize: [37, 50],
						// Смещение левого верхнего угла иконки относительно
						// её "ножки" (точки привязки).
						iconImageOffset: [-18.5, -25]
				  });
			 myMap.geoObjects
				  .add(myPlacemark);
		});
  }


};

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}

// window.onload = function () {
// 	document.body.classList.add('loaded_hiding');
// 	window.setTimeout(function () {
// 		document.body.classList.add('loaded');
// 		document.body.classList.remove('loaded_hiding');
// 	}, 500);
// }