$(document).ready(function(){

  $(".gnb>li").mouseenter(function(){
    $("#h_wrapper").addClass("move");
  });

  $(".gnb>li").mouseleave(function(){
    $("#h_wrapper").removeClass("move");
  });



  $(".b_list>li").click(function(){
    let list = $(this).index();
    $(".b_conts>ul").stop().fadeOut(400);
    $(".b_conts>ul").eq(list).stop().fadeIn(400);

    $(".b_list>li").removeClass("active");
    $(".b_list>li").eq(list).addClass("active");
  });



  $(".next").click(function(){
    $(".s1_list").stop().animate({"margin-left":"-200%"},600,function(){
      $(".s1_list>li:first-child").appendTo(".s1_list");
      $(".s1_list").css({"margin-left":"-100%"});
    });
  });

  $(".prev").click(function(){
    $(".s1_list").stop().animate({"margin-left": "0%"},600,function(){
      $(".s1_list>li:last-child").prependTo(".s1_list");
      $(".s1_list").css({"margin-left":"-100%"});
    });
  });


  // $(".fb4_top").click(function(){
  //   $(".fs_sub").slideToggle("display", "block");

  // $(".fb4_top").mouseleave(function(){
  //   $(".fs_sub").css("display", "none");  
  // });
  // });

  $(".fs_bttn").click(function(){
    $(".fs_sub").stop().slideToggle(350);
  });
  $(".fs_sub").mouseleave(function(){
    $(".fs_sub").stop().slideUp(350);
  });

});
