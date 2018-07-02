$(document).ready(function() {
    resizeDesign();
    changeName();
    $(window).scroll(function() {
        resizeDesign();
        changeBackground();
    });
    $(window).resize(function() {
        resizeDesign();
        changeName();
    });
});

//Resize navbar to be responsive and with the scrollup
const resizeDesign = () => {
    let widthScreen = $(document).width();
    let heightScreen = $(document).height();

    if (widthScreen <= 992 || $(document).scrollTop() > 110) {
        $(".head-container").css({
            "opacity": "1",
            "width": "100%",
            "border-radius": "0px",
            "border": "0px"
        });
    } else {
        $(".head-container").css({
            "opacity": ".9",
            "width": "90%",
            "border-radius": "20px",
            "border": "1px solid black"
        });
    }

    if (widthScreen <= 992) {
        $("#mainMenu").removeClass("head-menu-container");
        $("#middleMenu").removeClass("middle-menu");
    } else {
        $("#mainMenu").addClass("head-menu-container");
        $("#middleMenu").addClass("middle-menu");
    }

    if (widthScreen <= 500) {
        $(".main-container").css("height", "heightScreen");
    } else {
        $(".main-container").css("height", "120vh");
    }


}

//Delay effect to when scroll to the main photo
const changeBackground = () => {
    let marginBackground = ($(document).scrollTop() * -1) / 4;
    if ($(document).scrollTop() < 1000) {
        marginBackground = '0 ' + marginBackground + 'px';
        // alert(marginBackground);
        $(".main-container").css("background-position", marginBackground);
    } else if ($(document).scrollTop() >= 1000) {
        $(".main-container").css("background-position", "0 -70px");
    }
}

//Responsive to the main text
const changeName = () => {
    let widthScreen = $(document).width();
    if (widthScreen <= 1092) {
        $(".main-text").css("margin-left", "0px");
    } else {
        $(".main-text").css("margin-left", "310px");
    }
}


//I got this from https://css-tricks.com/snippets/jquery/smooth-scrolling/
// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });
