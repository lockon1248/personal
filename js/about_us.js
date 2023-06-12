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

//
    const list = document.querySelectorAll('.teacher_work_inner');
    const boxes = document.querySelectorAll('.teacher_work');
    console.log(list);

    list.forEach(function (trun, index) {
        const box = boxes[index];
        let computedStyle = getComputedStyle(trun);
        let left = parseInt(computedStyle.left) || 0;
        // let timer;

        function move() {
           let timer = setInterval(() => {
                left -= 2;
                if (left == - (3 * 500 + 6 * 16)) {
                    left = 0;
                }
                trun.style.left = left + 'px';
            }, 20);
        }

        move();

        box.onmouseover = function () {
            clearInterval(timer);
        };

        box.onmouseleave = function () {
            move();
        };
    });
})

