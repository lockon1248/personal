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

//下拉選單
    $(".question").click(function () {
        //檢查被點擊的question中的answer class是否是可見的
        let Open = $(this).siblings(".answer").is(":visible"); 
        //使所有的answer class向上滑動隱藏
        $(".answer").slideUp();
        //移除 active class
        $(this).removeClass('active');

        if (Open) return; //question中的answer class是可見的，就不做，若是不可見的，就往下

        //使被點擊的answer class向下滑動顯示
        $(this).siblings(".answer").slideDown();
        //加上 active class
        $(this).addClass('active');
        //選到question的父層元素(.parent)和他的兄弟(.siblings)，找到下面的.answer class並進行向下收合
        // $(this).parent().siblings().find(".answer").slideUp();

    });
});




