$(function(){
    //jQuery code goes here
    $(function(){
        //jQuery code goes here
        $("#up").on("click",function(){
            $("#box").animate({top: '0px'});
         });
    
         $("#down").on("click",function(){
            var height = $("#container").innerHeight() - $("#box").outerHeight() +"px";
            $("#box").animate({top: height});
         });
    
         $("#left").on("click",function(){
            var width = $("#container").innerWidth() - $("#box").outerWidth() +"px";
            $("#box").animate({left: '0px'});
         });
    
         $("#right").on("click",function(){
            var width = $("#container").innerWidth() - $("#box").outerWidth() +"px";
            $("#box").animate({left: width});
         });
    
         $("#fadeout").on("click",function(){
            $("#box").fadeOut();
         });
    
         $("#fadein").on("click",function(){
            $("#box").fadeIn();
         });
    
         $("#blink").on("click",function(){
            $("#box").fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
        });
    
         $("#reset").on("click",function(){
            $("#box").animate({top: '0px'});
            $("#box").animate({left: '0px'});
            $("#box").fadeIn();
         });
         
        });
    
    });