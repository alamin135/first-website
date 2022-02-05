$(function(){


    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();

        if(scrolling > 20){
            $(".back_to_top i").fadeIn(1000)
        }else{
            $(".back_to_top i").fadeOut(1000)
        }
    });


    $(".back_to_top i").click(function(){
        $('html, body').animate({
            scrollTop:0
        }, 1000);
    });


    // preloader js
    $(window).on('load', function(){
        $(".preloader").delay(1000).fadeOut();
    });


  
});