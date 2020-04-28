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
});