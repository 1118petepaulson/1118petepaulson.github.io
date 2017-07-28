$("a").on({
    mouseenter: function(){
        $(this).animate({bottom: "2.5vh"}, 800);
    },  
    mouseleave: function(){
        $(this).animate({bottom: "0vh"}, 800);
    }
});

$("#home").on({
    mouseenter: function(){
        $("#catPaw").animate({right: "43vw"}, 200);
        $("#catPaw").fadeIn();
    },
    mouseleave: function(){
        $("#catPaw").animate({right: "65vw"}, 200);
        $("#catPaw").fadeOut();   
    }           
});

$("#about").on({
    mouseenter: function(){
        $("#catPaw").animate({right: "33vw"}, 800);
        $("#catPaw").fadeIn();
    },
    mouseleave: function(){
        $("#catPaw").animate({right: "65vw"}, 800);
        $("#catPaw").fadeOut();
    }           
});

$("#schedule").on({
    mouseenter: function(){
        $("#catPaw").animate({right: "21vw"}, 800);
        $("#catPaw").fadeIn();
    },
    mouseleave: function(){
        $("#catPaw").animate({right: "65vw"}, 800);
        $("#catPaw").fadeOut();
    }           
});

$("#contact").on({
    mouseenter: function(){
        $("#catPaw").animate({right: "7vw"}, 800);
        $("#catPaw").fadeIn();
    },
    mouseleave: function(){
        $("#catPaw").animate({right: "65vw"}, 800);
        $("#catPaw").fadeOut();
    }           
});

$("#schedule").click(function(){
    $("#popUp, #closeButton").fadeIn();
});
$("#closeButton").click(function(){
    $("#popUp, #closeButton").fadeOut();
});