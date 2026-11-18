function updateActiveDot() {
    var activeIndex = $("#slider img:first").data("index");
    $(".dot").removeClass("active");
    $('.dot[data-slide="' + activeIndex + '"]').addClass("active");
}

function nextSlide() {
    $("#slider img:first")
        .fadeOut(500)
        .next()
        .fadeIn(500)
        .end()
        .appendTo("#slider");

    updateActiveDot();
}

function prevSlide() {
    $("#slider img:last")
        .fadeOut(500)
        .prependTo("#slider")
        .fadeIn(500);

    updateActiveDot();
}

$(document).ready(function(){

    $("#next").click(function(){
        nextSlide();
    });

    $("#prev").click(function(){
        prevSlide();
    });

    $(".dot").click(function(){
        var targetIndex = $(this).data("slide");
        var currentIndex = $("#slider img:first").data("index");

        if(targetIndex === currentIndex) return;

        var targetImg = $('#slider img[data-index="' + targetIndex + '"]');
        
        $("#slider img:first").fadeOut(500);
        targetImg.hide().prependTo("#slider").fadeIn(500);

        updateActiveDot();
    });

});