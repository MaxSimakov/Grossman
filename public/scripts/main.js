$(document).ready(function(){

    $(".BtnMenu").click(function () {
        $dataattr = $(this).data("modal_btn");
        $modal = '.mobile-modal[data-modal="' + $dataattr + '"';
        $(document).find($($modal)).fadeIn();
        $("body").css("overflow-y", "hidden");
    });
    $(".mobile-modal").click(function () {
        $(".mobile-modal").fadeOut();
        $("body").css("overflow-y", "scroll");
    });
    $(".menu-mobile__inner").click(function (e) {
        e.stopPropagation();
    });

    $("input[type='tel']").mask("+7(999)999-99-99");

    $(document).on("click",".anchor", function(){
        $('body,html').animate({ scrollTop: 0}, 1500);
    });

    /* раскрывающееся меню */
    function VertMenu($li) {
        $top = $li.closest(".vm-parent").offset().top;
        $top_li = $li.offset().top;
        $dropdown = $li.find(".vm-menu");
        $dropdown_h = $li.find(".vm-menu").outerHeight();
        $li_h = $li.outerHeight();
        $dropdown_top = $top_li - $top;

        $bottom = $li.closest(".vm-parent").offset().top + $li.closest(".vm-parent").outerHeight();
        $bottom_li = $li.offset().top + $li.outerHeight();
        $dropdown_bottom = $bottom - $bottom_li;

        $top_center = $dropdown_h / 2 - $li_h / 2;
        if ($dropdown_top < $top_center && $dropdown_bottom >= $top_center || $li.closest(".vm-parent").outerHeight() < $li.find(".vm-menu").outerHeight()) {
            $dropdown.css("top", 0 - $dropdown_top);
        } else {
            $dropdown.css("top", 0 - $top_center);
        }
        if ($dropdown_bottom < $top_center && $li.closest(".vm-parent").outerHeight() > $li.find(".vm-menu").outerHeight()) {
            $dropdown.css({"bottom": 0 - $dropdown_bottom, "top": "auto"});
        }
    }
    $(".vm-item").mouseenter(function () {
        VertMenu($(this));
    })

/* первое слово в строке */

    // var title = $(".section-title"),
    //     firstWord;
    // // console.log("first_word" + first_word);
    // title.each(function(){
    //     firstWord = $(this).text().split("/([^\s]?)\s?([.,?!:;])\s?([^\s]?)/u");
    //     console.log("title = " + $(this).text());
    //     console.log("firstWord = " + firstWord);
    // });

/* attach file */
    /* массив для название файлов */
    var arr = [];
    $(".attach-file__input").change(function (e) {
        var fileName = '';
        if ($(this).val() != '' && $(this).val() != null && $(this).val() != undefined) {
            var len = e.target.files.length;
            for (var i = 0; i < len; i++) {
                fileName = fileName + "<p>" + e.target.files[i].name + "<i class='close icon-1-4_close'></i>" +  "</p>";
                arr[i] = e.target.files[i].name;
            }
            $(".attachedFile").html(fileName);
        } else {
            $(".attachedFile").html("");
        }
    });
    
    $('.attachedFile').delegate("i", "click", function (){
        index = $(this).parent().index();
        $(this).parent().remove();
        arr.splice(index,1);
        console.log("fileName = " + arr);
    });
/* модальные окна */
    $(document).on('click', '#makeOrderBtn', function(){
        var makeOrder = $.fancybox.open({
            src: '#makeOrder',
            type: 'inline'
        });
        $('#sendInfo').click(function(){
            makeOrder.close();
        });
    });
    $(document).on('click', '#sendInfo', function () {
        $.fancybox.open({
            src: '#modalThanks',
            type: 'inline'
        });
    })

    $(document).on('click', '.logIn', function(){
        var logIn =  $.fancybox.open({
            src: '#logIn',
            type: 'inline'
        });
        $("#forgotPassw").click(function(){
            logIn.close();
        });
    });
    $(document).on('click', '#forgotPassw', function () {
        $.fancybox.open({
            src: '#passw-reuest',
            type: 'inline'
        });
    })

    $(document).on('click', '.findCheaperBtn', function() {
        var findCheaper = $.fancybox.open({
            src: '#findCheaper',
            type: 'inline'
        })
    });
    $(document).on('click', '.buyFast', function () {
        var logIn = $.fancybox.open({
            src: '#oneClick',
            type: 'inline'
        });
    });
    $(document).on('click', '.send-resume', function () {
        $(this).closest(".accordion__item").addClass("accordion__hovered");
        var sendResume = $.fancybox.open({
            src: '#send-resume',
            type: 'inline',
        });
        $profession = $(this).closest(".accordion__item").find("h3").html().toLowerCase();
        $profession = $profession[0].toUpperCase() + $profession.slice(1);
        $("#send-resume .input-List label:last-child input").val($profession);
    });
    $(document).on('click', '.order-service', function () {
        var makeOrder = $.fancybox.open({
            src: '#order-service',
            type: 'inline'
        });
        $('#order-service #sendInfo').click(function () {
            makeOrder.close();
        });
    });
    $(document).on('click', '.contacts-btn_send', function () {
        var logIn = $.fancybox.open({
            src: '#contacts-btn_send',
            type: 'inline'
        });
    });

/* фиксированная шапка и подвал */
    var header = $(".header").height(),
        h_fixed = $(".header-fixed"),
        f_fixed = $(".footer-fixed"),
        b_title = $(".basket-title")
        win = $(window);
    function scroll(){
        win.scroll(function(){
            if (win.scrollTop() > header){
                h_fixed.slideDown(100);
                h_fixed.addClass("f_show");
            }
            else{
                h_fixed.slideUp(100);
                h_fixed.removeClass("f_show");
            }
            /* фиксированный заголовок на странице корзина при скролле */
            if ($(".basket-title").css("display") == "block") {
                if (win.scrollTop() > $(".basket-section").offset().top - 53 && win.scrollTop() < $(".basket-footer").offset().top - 100) {
                    $mt = 14 + h_fixed.height();
                    $(".basket-section").css("margin-top", $mt);
                    b_title.css({ "position": "fixed", "padding": "20px 0", "top": h_fixed.height() });
                } else {
                    b_title.removeAttr("style");
                    $(".basket-section").removeAttr("style");
                }
            }
        });
        if (win.width() <= 600 ){
            win.scroll(function () {
                if (win.scrollTop() > header) {
                    f_fixed.slideDown(100);
                }
                else {
                    f_fixed.slideUp(100);
                }
            });
        }
    }
    scroll();
    $(window).resize(scroll);

/* для раскрытие или скрытие текстового блока */
    var i=0, value;
    $(document).on('click', '.openText', function(){
        $(this).closest(".text-block").toggleClass("open");
        switch ($(this).closest(".text-block").is(".open")){
            case true:
                value = "Свернуть";
                break;
            case false:
                value = "Читать далее";
                break;
        }
        $(this).html(value);
    });


    $(".input-wrap .input").keyup(function () {
        if ($(this).val() != '' && $(this).val() != NaN && $(this).val() != null && $(this).val() != undefined && $(this).val() != false) {
            $(this).closest(".input-wrap").find('span').addClass("up");
            $(this).css("border-color", "#e08b44");
        } else {
            $(this).closest(".input-wrap").find('span').removeClass("up");
            $(this).css("border-color", "#e1e1e1");
        }
    });

/* скролл */
    function TextBlock_scroll(){
        if($(window).width() > 767){
            $(".scrollWrap").mCustomScrollbar({
                axis: "y",
                theme: "dark"
            });
            if ($("div").is(".comparison-body")) {
                $(".comparison-body").mCustomScrollbar({
                    axis: "x",
                    mouseWheel: { axis: "x" },
                    advanced: { updateOnContentResize: true },
                    advanced: { updateOnSelectorChange: "div.comparison-body__inner" },
                    scrollButtons: { enable: true }
                });
                $(".comparison-table>div:not(.comparison-choose)").mCustomScrollbar("destroy");
            }
        }
        else{
            $(".scrollWrap").mCustomScrollbar("destroy");
            $(".comparison-table>div:not(.comparison-choose)").mCustomScrollbar({
                axis: "x",
                mouseWheel: { axis: "x" },
                advanced: { updateOnContentResize: true },
                advanced: { updateOnSelectorChange: "div.comparison-body" },
                scrollButtons: { enable: true }
            });
        }
    }
    TextBlock_scroll();
    $(window).resize(TextBlock_scroll);

    $(".scroll-always").mCustomScrollbar({
        theme: "dark"
    });

    /* увеличение и уменьшение количество товара */
    $(document).on('click','.count input', function(){
        $(this).keydown(function(e){
            if (e.keyCode < 48 && e.keyCode != 8 ||  e.keyCode > 57 &&  e.keyCode < 96 || e.keyCode > 105 ){
                e.preventDefault(); 
                console.log("code=" + e.keyCode);
            }
        });
    });
    $(document).on('click','.plus', function(){
        var input = $(this).closest(".count").find("input"),
            input_val = input.val();
        input.val(parseInt(input_val) + 1);
    });
    $(document).on('click','.minus', function(){
        var input = $(this).closest(".count").find("input"),
            input_val = input.val();
        if (parseInt(input_val) - 1 <= 0){
            input.val(0);
        }else{
            input.val(parseInt(input_val) - 1);
        }
    });

/* удаление товара из корзинки */
    $(".basket__item-btn").click(function() {
        $(this).closest(".basket__item").remove();
    });

/* слайдер на странице карточка товара*/
    var galleryThumbs = new Swiper('.card-product__slider .gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 3,
        slidesPerView: 'auto',
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.card-product__slider .gallery-top', {
        spaceBetween: 0,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs
        }
    });

/* модальное окно просмотр продукта на странице карточка товара */
    var galleryThumbs1 = new Swiper('.view-product .gallery-thumbs', {
        slidesPerView: 3,
        slidesPerView: 'auto',
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        allowTouchMove: false
    });
    var galleryTop1 = new Swiper('.view-product .gallery-top', {
        spaceBetween: 15,
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs1
        }
    });
    $(".card-product__slider .gallery-top .swiper-slide").click(function() {
        $(".view-product").fadeIn();
        $("body").css("overflow-y", "hidden");
        galleryThumbs1.update();
        galleryTop1.update();
        $(".view-product").click(function() {
            $(".view-product .gallery-thumbs .swiper-slide").parent().css("transform", "translate3d(0,0,0)");
        })   
        $(".view-product").mousemove(function() {
            $(".view-product .gallery-thumbs .swiper-slide").parent().css("transform", "translate3d(0,0,0)");
        })   
        $(".view-product button").click(function() {
            $(".view-product").fadeOut();
            $("body").css("overflow-y", "scroll");
        });
    });
    $(".view-product").mCustomScrollbar({
        theme: "dark"
    });
    $(".view-product").css("display", "block");
    $h_inner = $(".view-product__inner").outerHeight();
    $(".view-product").css("display", "none");
    if ($(".view-product").height() > $h_inner) {
        $(".view-product__inner").css("height", $(".view-product").height());
    }
    if ($("div").is(".card-product__slider")) {
        $(window).resize(function () {
            galleryThumbs1.update();
            galleryTop1.update();
            if ($(".view-product").height() > $h_inner) {
                $(".view-product__inner").css("height", $(".view-product").height());
            } else {
                $(".view-product__inner").removeAttr("style");
            }
        });
    }

/* нижний слайдер на странице карточка товара */
    var cardTabsSlider = new Swiper('.card-product__tabslider', {
        init: false,
        breakpoints: {
            // when window width is >= 220px
            220: {
                slidesPerView: 1,
                spaceBetween: 15
            },
            // when window width is >= 576px
            576: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            // when window width is >= 751px
            751: {
                slidesPerView: 3,
                spaceBetween: 15
            },
            // when window width is >= 1150px
            1150: {
                slidesPerView: 4,
                spaceBetween: 20
            },
            // when window width is >= 1401px
            1401: {
                slidesPerView: 5,
                spaceBetween: 15
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var cardTabsSlider1 = new Swiper('.card-product__tabslider1', {
        init: false,
        breakpoints: {
            // when window width is >= 220px
            220: {
                slidesPerView: 1,
                spaceBetween: 15
            },
            // when window width is >= 576px
            576: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            // when window width is >= 751px
            751: {
                slidesPerView: 3,
                spaceBetween: 15
            },
            // when window width is >= 1150px
            1150: {
                slidesPerView: 4,
                spaceBetween: 15
            },
            // when window width is >= 1401px
            1401: {
                slidesPerView: 5,
                spaceBetween: 15
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    $(".tab-containers[data-tab='otherCardTab'] .swiper-container").each(function () {
        setTimeout(function () {
            cardTabsSlider.init();
        }, 100);
    });
    $(document).on('click', '.tab-btns[data-tab="otherCardTab"] .tab-btn', function () {
        setTimeout(function () {
            cardTabsSlider1.init();
            cardTabsSlider.init();
            cardTabsSlider1.update();
            cardTabsSlider.update();
        }, 100);
    })
    function removeClass_viewList() {
        if ($(window).width() < 576) {
            $(".card-Item").each(function () {
                if ($(this).attr("data-card") == "list") {
                    $(this).removeClass("view-list");
                }
            });
        } else {
            $(".card-Item").each(function () {
                if ($(this).attr("data-card") == "list") {
                    $(this).addClass("view-list");
                }
            });
        }
    }
    removeClass_viewList();
    $(window).resize(removeClass_viewList);

    /* min-modals */
    $("button[data-open='min-modal']").click(function () {
        var btn_index = $(this).attr("data-index");
        $(this).toggleClass("active");
        $(".min-modal").removeClass("modal-show");
        if ($(this).is(".active")) {
            $(".min-modal").each(function () {
                if ($(this).attr("data-index") == btn_index) {
                    $(this).addClass("modal-show");
                }
            });
            if ($(this).hasClass("electBtn")) {
                $(this).find(".popup-desc").html("Добавлено в избранное");
            }
            if ($(this).hasClass("comparisonBtn")) {
                $(this).find(".popup-desc").html("Добавлено в сравнение");
            }
        }
    });

    $(".min-modal .close").click(function () {
        $(this).closest(".min-modal").removeClass("modal-show");
    });

    /* все характеристики на странице карточка  товара*/
    $(".card-product__characteristics button").click(function() {
        if ($(".card-product__characteristics-all").css("display") == "none") {
            $(".card-product__characteristics-all").slideDown();
            $(this).html("Скрыть");
        } else {
            $(".card-product__characteristics-all").slideUp();
            $(this).html("Все характеристики");
        }
    })

    /* подробнее на странице карточка товара */
    $(".card-Item__moreinfo").click(function() {
        $card_btn = $(this);
        $card_info = $card_btn.closest(".card-Item[data-card='list']").find(".card-body__info");
        $card_img = $card_btn.closest(".card-Item[data-card='list']").find(".card-img").height();
        $table = $card_btn.closest(".card-Item[data-card='list']").find(".card-Item__table");
        if ($(window).width() > 1250) {
            if ($card_info.height() < $card_img) {
                $card_info.css("margin-top", 0 - $card_btn.height() - 21);
            } else {
                $card_btn.hide().css("opacity", "0");
                $margin = $card_img - $card_info.height();
                if ($margin < 0) $margin = 0;
                $card_info.css("margin-top", 0 - $margin);
            }
        }
        $card_btn.hide().css("opacity", "0");
        $table.slideDown();
        $(".card-Item__moreinfo").not($card_btn).removeAttr("style");
        $(".card-body__info").not($card_info).removeAttr("style");
        $(".card-Item__table").not($table).slideUp();
        $(".card-Item__hidden").click(function() {
            $table.slideUp();
            $card_btn.css("display", "block");
            $card_btn.animate({
                opacity: 1,
            }, 500);
            $card_btn.removeAttr("style");
            $card_info.removeAttr("style");
        })
    })
    
/* наведение на строку таблицы на странице сравнение*/
    $(".comparison-table tr").hover(
        function() {
            $index_tr = $(this).index();
            if ($index_tr != 0) {
                $(".comparison-title tr").eq($index_tr).addClass("comparison-table__hovered");
                $(".comparison-body tr").eq($index_tr).addClass("comparison-table__hovered");
            }
        },
        function() {
            $index_tr = $(this).index();
            if ($index_tr != 0) {
                $(".comparison-title tr").eq($index_tr).removeClass("comparison-table__hovered");
                $(".comparison-body tr").eq($index_tr).removeClass("comparison-table__hovered");
            }
        }
    )

/* удаление товара из списка на странице сравнение */
    function Comparison_result($w_td, $l_td, $w_body) {
        $(".comparison-result__all").html($l_td);
        if ($(window).width() < 768) {
            if ($w_td * $l_td <= $(".comparison-table>div:not(.comparison-choose)").width() - $w_td) $result_view = $l_td;
            else $result_view = ($(".comparison-table>div:not(.comparison-choose)").width() - $w_td) / $w_td;
        } else {
            if ($w_td * $l_td <= $w_body) $result_view = $l_td;
            else $result_view = $w_body / $w_td;
        }
        $(".comparison-result__view").html($result_view.toFixed());
    }
    Comparison_result($(".comparison-table td").outerWidth(), $(".comparison-body tr:first-child td").length - 1, $(".comparison-body").width());
    $(".comparison-table .basket__item-btn").click(function() {
        $index_td = $(this).closest("td").index();
        for ($i = 0; $i < $(".comparison-body tr").length; $i++) {
            $(".comparison-title tr").eq($i).children().eq($index_td).remove();
            $(".comparison-body tr").eq($i).children().eq($index_td).remove();
        }
        $width = $(".comparison-table td").outerWidth();
        $width = $(".comparison-body__inner").width() - $width;
        $(".comparison-body__inner").css("width", $width);
        $(".comparison-table .mCSB_container").css("width", $width);
        if ($width < $(".comparison-body").width()) {
            $(".comparison-table .mCSB_container").css("margin-bottom", "0");
        } else {
            if ($(window).width() < 576) $(".comparison-table .mCSB_container").css("margin-bottom", "40px");
            else {
                if ($(window).width() < 992) $(".comparison-table .mCSB_container").css("margin-bottom", "45px");
            }
        }
        Comparison_result($(".comparison-table td").outerWidth(), $(".comparison-body tr:first-child td").length - 1, $(".comparison-body").width());
    });

    /* при адаптации после изменения ширины ячеек изменение ширины контейнер */
    $width = $(".comparison-table td").outerWidth() * ($(".comparison-body tr:first-child td").length - 1);
    $(".comparison-body__inner").css("width", $width);
    $(".comparison-table .mCSB_container").css("width", $width);
    $(window).resize(function() {
        $width = $(".comparison-table td").outerWidth() * ($(".comparison-body tr:first-child td").length - 1);
        $(".comparison-body__inner").css("width", $width);
        $(".comparison-table .mCSB_container").css("width", $width);
        Comparison_result($(".comparison-table td").outerWidth(), $(".comparison-body tr:first-child td").length - 1, $(".comparison-body").width());
    })

    /* клик по аккордиону */
    $(".accordion__item").click(function() {
        $accordion_item = $(this);
        $(this).toggleClass("accordion__hovered");
        $(".accordion__item").not($(this)).removeClass("accordion__hovered");
    })

    /* карта на странице контакты */
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
    
    /* появление выпадающего блока в хлебных крошках */
    var win_width = $(window).width(), _this_;
    $(document).on('click', '.crumb .arrowDown', function(){
        _this_ = $(this);
        showDownCrumbs($(this));
    });
            // $(window).resize(function(){
            //     showDownCrumbs(_this_);
            // });
    

    function showDownCrumbs(_this){
        if (win_width <= 1024){
            var _this = _this,
                width_this = _this.width(),
                height_this = _this.height(),
                top_this = _this.position().top;
                dropdown = _this.find(".dropdown"),
                _this_left = _this.position().left,
                len = win_width - _this_left,
                _this_right = len - width_this;
                width_dropdown = dropdown.width();

            dropdown.css("top", top_this + height_this + 4);

            if (len <= width_dropdown - 15){
                dropdown.css("right", -15).css("left", "auto");
            }else{
                dropdown.css("left", _this_left - 15).css("right", "auto");
            }
        }
    }
});
//# sourceMappingURL=../maps/scripts/main.js.map
