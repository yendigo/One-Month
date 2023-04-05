$(".question").click(function() {
    $(this).next().animate({
        opacity: "toggle",  
        height: "toggle"
    }, {
        duration: "slow"
    });
    $(this).children().toggleClass("collapse");      
});

