$(document).ready(function () {
    $(".star").click(function (event) { 
        event.preventDefault();
        //切換圖片
        $(this).attr("src",function(src){
           return $(this).attr("src") === "img/star-plus-outline.png" ? 
           "img/star.png" :"img/star-plus-outline.png" ;
        });
    });
    $(".eye").click(function (event) { 
        event.preventDefault();
        //切換圖片
        $(this).attr("src",function(src){
           return $(this).attr("src") === "img/eye-plus-outline.png" ? 
           "img/eye.png" :"img/eye-plus-outline.png" ;
        });
    });
    $(".bell").click(function (event) { 
        event.preventDefault();
        //切換圖片
        $(this).attr("src",function(src){
           return $(this).attr("src") === "img/bell-ring-outline.png" ? 
           "img/bell-check-outline.png" :"img/bell-ring-outline.png" ;
        });
    });

  });