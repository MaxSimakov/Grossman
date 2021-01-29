$(document).ready(function(){
    // var def_value = [],
    //     len = $(".select-wrap").length;
    // for(var i=0;i<len;i++){
    //     def_value[i] = $(".select-wrap").eq(i).find("input[type='hidden']").val();
    // }

    $(document).on('click', '.select-text', function(){
        $(".select-wrap").not($(this).closest(".select-wrap")).removeClass("open");
        $(this).closest(".select-wrap").toggleClass("open");
    });
   
    $(document).on('click', '.checkItem', function(){
        var list_body_name = $(this).closest("ul").attr("data-name"),
            parent = $(this).closest(".select-wrap").find(".select-text"),
            parent_input = $(this).closest(".select-wrap").find(".select-text input"),
            parent_text = $(this).closest(".select-wrap").find(".select-text span"),
            parent_wrap = $(this).closest(".select-wrap"),
            this_value = $(this).val(),
            _this = $(this),
            item = _this.closest("li"), 
            item_index = item.index(),
            parent_list,
            parent_items,
            filterItem_index = $(this).closest(".filterItem").index();

            parent.css("border-color", "var(--Flamenco)")
            // parent_input.val(this_value);
            // parent_text.html(this_value);

        /* находим родительский dropdown блок и его дочерние li */
        $(".dropdown ul").each(function(){
            if ($(this).attr("data-name") == list_body_name){
                parent_list = $(this);
                parent_items = parent_list.children("li");
            }
        });

        if (item.is(".allItem")){
            var all_item = item;
            if (all_item.is(".selected")){
                parent_list.find("li").removeClass("selected");
                parent_list.find(".checkItem").prop("checked", false);
                parent.removeAttr('style');
                parent_wrap.removeClass("open");
                // parent_input.val(def_value[parent_num]);
                // parent_text.html(def_value[parent_num]);
            }else{
                parent_list.find("li").addClass("selected");
                parent_list.find(".checkItem").prop("checked", true);
                
            }
        }else{
                var count = 0;
                item.toggleClass("selected");
                parent_items.not(parent_items.eq(0)).each(function(){
                    if ($(this).is(".selected") == false){
                        count++;
                    }
                });
                if(count != 0){
                    parent_items.eq(0).removeClass("selected");
                    parent_items.eq(0).find(".checkItem").prop("checked", false);
                }else{
                    parent_items.eq(0).addClass("selected");
                    parent_items.eq(0).find(".checkItem").prop("checked", true);
                }
            if (parent_items.is(".selected") != true && parent_items.find("input").prop('checked') !=true){
                parent.removeAttr('style');
                // parent_input.val(def_value[parent_num]);
                // parent_text.html(def_value[parent_num]);
            }
            if (parent_items.not(parent_items.eq(0)).is(".selected") == false){
                parent_items.eq(0).removeClass("selected");
                parent_items.eq(0).find(".checkItem").prop("checked", false);
                parent.removeAttr('style');
            }
        }
        /* появление выбранных полей под филтором */
        $(".selected-fields").removeClass("hide");
        var fields_span=[],
            _this_span = _this.closest("li").find("span"),
            name_field_text = parent_text.text(),
            clone_this_span,
            new_field;
        if (item.is(".allItem")){
            for (var j = 1; j < parent_items.length;j++){
                fields_span[j - 1] = parent_items.eq(j).find("span").clone();

            }
            if (all_item.is(".selected")){
                for (var j = 0; j < fields_span.length;j++){
                    item_index = j + 1;
                    new_field = "<div class='selected-field'><p>" + name_field_text + "</p><div><span>" + fields_span[j].html() + "</span><i class='close icon-1-4_close'></i></div><b>" + filterItem_index + "</b><em>" + item_index + "</em></div>";
                    $(".selected-fields").append(new_field);
                }
            }else{
                for (var j = 0; j < fields_span.length; j++){
                    $(".selected-field").each(function () {
                        if ($(this).find("p").html() == name_field_text && $(this).find("span").html() == fields_span[j].html()) {
                            $(this).remove();
                        }
                    });
                    if ($(".selected-field").length == 0) {
                        $(".selected-fields").addClass("hide");
                    }
                }
            }
        }else{
            clone_this_span = _this_span.clone();
            new_field = "<div class='selected-field'><p>" + name_field_text + "</p><div><span>" + clone_this_span.html() + "</span><i class='close icon-1-4_close'></i></div><b>" + filterItem_index + "</b><em>" + item_index + "</em></div>";
            if(item.is(".selected")){
                $(".selected-fields").append(new_field);
            }else{
                $(".selected-field").each(function(){
                    if ($(this).find("p").html() == name_field_text && $(this).find("span").html() == _this_span.html()){
                        $(this).remove();
                    }
                });
                if ($(".selected-field").length == 0) {
                    $(".selected-fields").addClass("hide");
                }
            }
        }

    });

    /* удаление выбранных элементов */
    $(document).on('click', '.selected-field .close', function () {
        var _this= $(this),
            filterItem_index = _this.closest(".selected-field").find("b").text(),
            filterItem_li_index = _this.closest(".selected-field").find("em").text();

        $(".filterItem").eq(filterItem_index).find("li").eq(filterItem_li_index).removeClass("selected");
        $(".filterItem").eq(filterItem_index).find(" li").eq(filterItem_li_index).find(".checkItem").prop('checked', false);

        $(this).closest(".selected-field").remove()
        if ($(".selected-field").length == 0) {
            $(".selected-fields").addClass("hide");
        }
        var count = 0;
        if ($(".filterItem").eq(filterItem_index).find("li").eq(0).is(".selected")){
            $(".filterItem").eq(filterItem_index).find("li").each(function(){
                if ($(this).is(".selected")){
                    count++;
                }
            });
            if(count == 1 ){
                $(".filterItem").eq(filterItem_index).find("li").eq(0).removeClass("selected");
                $(".filterItem").eq(filterItem_index).find("li").eq(0).find(".checkItem").prop('checked', false);
                $(".filterItem").eq(filterItem_index).find(".select-text").removeAttr('style');
            }
        }
    });

    $(document).on('click',function(){
        $(".select-wrap").removeClass("open");
    });
    $(document).on('click', '.select-wrap', function(e){
        e.stopPropagation();
    });

    $(document).on('click', '.radioItem', function(){
        var list_body_name = $(this).closest("ul").attr("data-name"),
            parent = $(this).closest(".select-wrap"),
            parent_input = $(this).closest(".select-wrap").find(".select-text input"),
            parent_text = $(this).closest(".select-wrap").find(".select-text span"),
            _this = $(this),
            item = _this.closest("li");

            $(".dropdown ul").each(function () {
                if ($(this).attr("data-name") == list_body_name) {
                    parent_list = $(this);
                    parent_items = parent_list.children("li");
                }
            });
        parent_items.removeClass("selected");
        item.addClass("selected");
        parent_input.val(_this.val());
        parent_text.text(_this.next().text());
        parent.removeClass("open");
    });

    $(".select-wrap").each(function(){
    /* убераем стрелочки */
        var selectText = $(this).find('.select-text')
        if (selectText.find("input").attr("type") != "hidden" && selectText.next().is(".dropdown") == false){
            $(this).addClass("Notarrow");
        }
    });
    /* раскрытие и скрытие элементов фильтра */
    var len_filterItem = $(".filterItem").length;
    for(var i=0;i<8;i++){
        $(".filterItem").eq(i).addClass("show");
    }
    $(document).on('click', '.Btn-filter', function(){
        for (var i = 8; i < len_filterItem; i++) {
            $(".filterItem").eq(i).toggleClass("show", 1000);
        }
    });

    var f= 0;
    $(".filter-Btn").click(function(){
        f++;
        switch(f % 2){
            case 0: 
                $(".filter-Btn").find("span").text("Открыть фильтры");
                break;
            default:
                $(".filter-Btn").find("span").text("Скрыть фильтры");
                break;
        }
        $(this).closest(".filter-wrap").find(".filter-inner").slideToggle("slow");
    });



});
//# sourceMappingURL=../../../maps/templates/blocks/filter/filter.js.map
