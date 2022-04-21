
$(function(){    

    //all of jquery your code goes here
    $("#btn1").click(function() {
        $('.wrapperDiv').hide();
    });

    $("#btn2").click(function() {
        $('.wrapperDiv').show();
    });

    $("#btn3").click(function() {
        $('#1').text('One');
        $('#2').text('Two');
        $('#3').text('Three');
        $('#4').text('Four');
        $('#1, #3').addClass('id1');
        $('#2, #4').addClass('id2');
    });

    $("#1, #2, #3, #4").hover(function(){
        $(this).removeClass("id1");
        $(this).removeClass("id2");

        var txt = $(this).text();
        if(txt == 'One')
            $(this).text("1");
        if(txt == 'Two')
            $(this).text("2");
        if(txt == 'Three')
            $(this).text("3");
        if(txt == 'Four')
            $(this).text("4");
    });

    $("#1, #2, #3, #4").on({
        mouseenter: function() {
            $(this).addClass("hover");
        },

        mouseleave: function() {
            $(this).removeClass("hover");
        }
    });
});