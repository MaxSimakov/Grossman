$(document).ready(function () {

    var brend_block = new Swiper('.brend-block__slider', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 4000,
        },
        loop: true,
        speed: 1200,
        breakpoints: {
            // when window width is >= 575px
            576: {
                slidesPerView: 2
            },
            // when window width is >= 700px
            701: {
                slidesPerView: 3,
                spaceBetween: 10
            },
            // when window width is >= 991px
            992: {
                slidesPerView: 4,
                spaceBetween: 20
            },
            // when window width is >= 1199px
            1200: {
                slidesPerView: 5,
                spaceBetween: 20
            },
            // when window width is >= 1300px
            1301: {
                slidesPerView: 6,
                spaceBetween: 20
            }
        }
    });

    var customer_block = new Swiper('.customer-block__slider', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
            autoplay: {
            delay: 3000,
        },
            loop: true,
            speed: 1200,
            breakpoints: {
            // when window width is >= 575px
            576: {
                slidesPerView: 2
            },
            // when window width is >= 700px
            701: {
                slidesPerView: 3,
                spaceBetween: 10
            },
            // when window width is >= 991px
            992: {
                slidesPerView: 4,
                spaceBetween: 20
            },
            // when window width is >= 1199px
            1200: {
                slidesPerView: 5,
                spaceBetween: 20
            },
            // when window width is >= 1300px
            1301: {
                slidesPerView: 6,
                spaceBetween: 20
            }
        }
    });
});
//# sourceMappingURL=../../../maps/templates/blocks/brend-customer-sliders/sliders.js.map
