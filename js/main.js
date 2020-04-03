$(function () {
    
    $('#tb-ml-menu').click(function() {
        $('#tb-ml-menu-main').animate({height: "toggle"}, 500);
    })
    
    $('#return').click(function() {
        $('body, html').stop().animate({scrollTop: "0"}, 1000);
    })
    
    $(window).scroll(function() {
        var window_bottom = $(window).innerHeight() + $(window).scrollTop();
        // console.log($('footer').offset().top);

        if (window_bottom < $('#popular-articles').offset().top) {
            console.log("hide-ok");
            $('#return').hide();
        }else if (window_bottom >= $('#popular-articles').offset().top) {
            console.log("show-ok");
            $('#return').show();
        }

        //footer付近のreturn

        if (window_bottom >= $('footer').offset().top) {
            console.log("a-ok");
            $('#return').removeClass("return-b");
            $('#return').addClass("return-a");
        }else if (window_bottom < $('footer').offset().top) {
            console.log("b-ok");
            $('#return').removeClass("return-a");
            $('#return').addClass("return-b");
        }
    })
})

// position: sticky;
//     top: 85%;
//     /* position: fixed; */
//     /* bottom: 1%; */
//     /* right: 0%; */
//     margin-bottom: 2%;
//     margin-right: 1%;