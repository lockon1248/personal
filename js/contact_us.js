$(function () {
   var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,

});
})



//下拉選單
$(document).ready(function () {
    $(".question").click(function () {
        let isOpen = $(this).siblings(".answer").is(":visible");
        $(".answer").slideUp();
        $(this).removeClass('active')
        if (isOpen) return;
        $(this).siblings(".answer").slideDown();
        $(this).addClass('active')
        $(this).parent().siblings().find(".answer").slideUp();
    });

});
