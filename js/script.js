$(document).ready(function(){
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });

    var typed = new Typed(".typed", {
        strings: ["Student at University of Toronto.", "Computer Science.", "Developer."],
        typeSpeed: 50,
        loop: true,
        startDelay: 1000,
        showCursor: false
    })

    $('.owl-carousel').owlCarousel({
        loop:true,
        items: 4,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
            

        }
    })



    var skillsTopOffset = $(".skillsSection").offset().top;

    $(window).scroll(function(){

        if(window.pageYOffset > skillsTopOffset - $(window).height() + 200){

            $('.chart').easyPieChart({
                easing: "easeInOut",
                barColor: '#f5f6fa',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function(from, to, percent){
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }
    });

});