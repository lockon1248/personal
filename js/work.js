$(function () {

    //燈箱
    let img = document.createElement("img") //設變數img=createElement(img標籤)(createElement是加標籤的意思)
    document.querySelector(".light_pic").appendChild(img);
    //選到.light_pic，appendChild(加上)img變數
    document.querySelector(".img_block").addEventListener("click", (e) => {
        console.log(e.target) //知道甚麼是e.target
        document.querySelector(".light_box").style.display = "flex"
        //讓light_box變成flex
        document.querySelector(".light_pic img").src = `${e.target.src}`
        //選擇.light_pic的img標籤的src屬性，加上模板字{e.target.src}
    });
    document.querySelector(".light_box").addEventListener("click", (e) => {
        e.stopPropagation();
        if (e.eventPhase === 2) {
            document.querySelector(".light_box").style.display = "none"

        }
    });
    document.querySelector(".cross").addEventListener("click", (e) => {
        document.querySelector(".light_box").style.display = "none"
    });

    // 貓頭鷹首頁幻燈片

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
