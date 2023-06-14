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

    
    $('.invoice_checkbox input').click(function () {
        if ($(this).prop('checked')) {
            $('.invoice_checkbox input:checkbox').prop('checked', false);
            $(this).prop('checked', true);
        }
    });


})

