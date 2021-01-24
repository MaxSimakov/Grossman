$(document).ready(function(){
    var main_slider = new Swiper('.main-slider', {
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        //     autoplay: {
        //     delay: 3000,
        // },
            loop: true,
            speed: 1200,
    });

/* надо убрать */
    // function changeImg(){
    //     if($(window).width() <= 600){
    //         $(".main-slider .swiper-slide").css("background-image"," url(assets/images/main-slider-1-min.jpg)");
    //     }else{
    //         $(".main-slider .swiper-slide").css("background-image"," url(assets/images/main-slider-1.jpg)");
    //     }
    // }
    // changeImg();
    // $(window).resize(changeImg);
});
//# sourceMappingURL=../../../maps/templates/blocks/main-slider/main-slider.js.map
