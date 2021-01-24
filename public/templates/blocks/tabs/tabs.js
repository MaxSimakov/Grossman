$(document).ready(function(){
    $(".tab-btns").each(function(){
        $(this).find(".tab-btn").eq(1).addClass("active");
    });
    $(".tab-containers").each(function(){
        $(this).find(".tab-container").eq(1).fadeIn();
    });
    $(".tab-btns[data-tab='otherCardTab']").each(function(){
        $(this).find(".tab-btn").eq(0).addClass("active");
        $(this).find(".tab-btn").eq(1).removeClass("active");
    });
    $(".tab-containers[data-tab='otherCardTab']").each(function(){
        $(this).find(".tab-container").eq(0).fadeIn();
        $(this).find(".tab-container").eq(1).css("display", "none");
    });
    $(document).on('click','.tab-btn', function(){
        var _this = $(this),
            _this_index = _this.index(),
            _this_parent = _this.closest(".tab-btns"),
            btn_data_tab = _this_parent.attr("data-tab"),
            _this_containers,
            _this_containers_item,
            _this_container; 
        _this_parent.find(".tab-btn").removeClass("active");
        _this.addClass("active");
        $(".tab-containers").each(function(){
            if ($(this).attr("data-tab") == btn_data_tab){
                _this_containers = $(this);
                _this_containers_item = _this_containers.find(".tab-container");
                _this_containers_item.not(_this_containers_item.eq(_this_index)).fadeOut();
                _this_container = _this_containers_item.eq(_this_index).fadeIn();
            }
        });
    });
});
//# sourceMappingURL=../../../maps/templates/blocks/tabs/tabs.js.map
