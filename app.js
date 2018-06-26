$(document).ready(function() {
    resizeNavBar();
    $(window).scroll(function() {
        resizeNavBar();
    });
    $(window).resize(function() {
        resizeNavBar();

    });
});


const resizeNavBar = () => {
    let widthScreen = $(document).width();
    if (widthScreen <= 787 || $(document).scrollTop() > 110) {
        $(".head-container").css({
            "opacity": "1",
            "width": "100%",
            "border-radius": "0px",
            "border": "0px"
        })
    } else {
        $(".head-container").css({
            "opacity": ".9",
            "width": "90%",
            "border-radius": "20px",
            "border": "1px solid black"
        })

    }
}
