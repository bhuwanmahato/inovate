$(".activeslide").find(".fa-plus").fadeOut()
$(".activeslide2").find(".fa-plus").fadeOut()

$(document).ready(function () {

    $('.slidingbar').slideUp(function () {
        $('.activeslide').children("p").slideDown();
        $('.activeslide').children(".fa-plus").fadeOut(100);
      });   
      
      $('.slidingbar2').slideUp(function () {
        $('.activeslide2').slideDown();
        $('.activeslide2').children(".fa-plus").fadeOut(100);
      }); 

    $(".contentHeader").on("click",function(){

            

            
            
            $(".activeslide").children("p").slideUp();
            // $("p").slideUp()
           
            $(".activeslide").find(".fa-plus").fadeIn()
            $(".activeslide").removeClass("activeslide");
            $(this).addClass("activeslide");
            $(".activeslide").find(".fa-plus").fadeOut()
            $(".activeslide").children("p").slideDown(function(){
              
            
            });
        
    })


    $(".contentHeader2").on("click",function(){

        $(".activeslide2").children("p").slideUp();
        $(".activeslide2").find(".fa-plus").fadeIn()
        $(".activeslide2").removeClass("activeslide2");
        $(this).addClass("activeslide2");
        $(".activeslide2").find(".fa-plus").fadeOut()
        $(".activeslide2").children("p").slideDown(function(){
          
        
        });
            
        
    })


    $(".navbar").children().click(function(){
        $(".navbar-collapse").slideUp()
    })

    $(".navbar-toggler").click(function(){
        $(".navbar-collapse").slideDown(800,"linear")
    })

    

});
