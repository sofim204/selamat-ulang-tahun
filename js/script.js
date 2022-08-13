$(document).ready(function() {
    window.location = "index.html#home";
    $(".container_first").show();
    $(".container_second").hide();

    $( ".kado" ).click(function() {
        $("#buzzer").get(0).play();
       
        window.setTimeout( function(){
            window.location = "index.html#showtime";
            $(".container_first").hide();
            $(".container_second").show();
        }, 2000 );
    });
});