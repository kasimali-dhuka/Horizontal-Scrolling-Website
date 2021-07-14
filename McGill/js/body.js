$(document).ready(function(){

    // sidebar navigation active list animation
    $(".main-list-items").hover(function(event){
        const target = "#" + event.target.childNodes[1].id;
        $(target).toggleClass("active");
    });

    $(".sub-list-item").hover(function(event){
        const target = "#" + event.target.id;
        $(target).toggleClass("active-sub");
    });
    // ------------------------------------------------------------


    // Toggle between vertical navigation bar with menu-btn
    $("#btn").click(function(e){

        e.stopPropagation();
        $("#btn").toggleClass("on");
        $("#sideNavbar").toggleClass("showNavbar");
        
    });

    $("#sideNavbar").click(function(e){
        
        e.stopPropagation();

    });

    $("body, html").click(function (e) { 

        e.stopPropagation();
        $("#btn").removeClass("on");
        $("#sideNavbar").removeClass("showNavbar");

    });
    // ------------------------------------------------------------


    // // button for pop-up tooltip in Section 4
    $("#content4-pop-up-btn").click(function(){
        $(".content4-pop-up-btn .close-btn").toggleClass("open");
        $(".content4-pop-up-title").toggleClass("show-r");
    });
    // ------------------------------------------------------

    
    // Button for pop-up tooltip in Section 11
    $("#c11-btn1").click(function(e){
        let verify = $('#c11-btn2 .close-btn').hasClass('open');
        if(verify){
            $(".content11-tooltip2").removeClass("show");
            $('#c11-btn2 .close-btn').removeClass("open");

            $(".content11-tooltip3").removeClass("show");
            $('#c11-btn3 .close-btn').removeClass("open");

            $(".content11-tooltip4").removeClass("show");
            $('#c11-btn4 .close-btn').removeClass("open");
            console.log('done');
        }else {
            console.log('nope');
        }
        $(".content11-btn1 .close-btn").toggleClass("open");
        $(".content11-tooltip1").toggleClass("show");
    });

    $("#c11-btn2").click(function(){
        $(".content11-btn2 .close-btn").toggleClass("open");
        $(".content11-tooltip2").toggleClass("show");
    });

    $("#c11-btn3").click(function(){
        $(".content11-btn3 .close-btn").toggleClass("open");
        $(".content11-tooltip3").toggleClass("show");
    });

    $("#c11-btn4").click(function(){
        $(".content11-btn4 .close-btn").toggleClass("open");
        $(".content11-tooltip4").toggleClass("show");
    });

});
