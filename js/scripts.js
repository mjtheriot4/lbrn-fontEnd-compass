$( document ).ready(function() {
//Mobile Menu
  $("#navBug").click(function(){
      $('nav').slideToggle('fast');
      if ($(this).attr("src") == "images/menuOpen.png") {
        $(this).attr("src", "images/menuClosed.png");
      }
      else {$(this).attr("src", "images/menuOpen.png")}
  });
  $("body > div.layout").click(function(){
    if ($('#navBug').css('display') != 'none'){
      $('nav').slideUp('fast');
      $('#navBug').attr("src", "images/menuClosed.png")
    }
  });
  $(window).resize(function(){
    if ($('#navBug').css('display') == 'none'){
      $('nav').css('display','block');
    }
    else {$('nav').css('display','none')}
    contentHeight = $('#matchHeight').css('height');
    $('#lbrnEventSidebar').css('height', contentHeight);
  });
  $('.collapseTrigger').siblings('h2').click(function() {
    console.log('fired');
    $(this).siblings('.collapse').toggleClass('expand');
    $(this).siblings('.collapseTrigger').toggleClass('fa-chevron-right').toggleClass('fa-chevron-down');
  });


  $(window).scroll(function() {
    contentHeight = $('#matchHeight').css('height');
    $('#lbrnEventSidebar').css('height', contentHeight);

  });
});

// function quickRef(){
//   if ($('#quickReference>div>.fa').class('fa-info-circle')){
//     $(this).addClass('fa-cheveron-down').removeClass('fa-info-circle');
//     $(this).parent().parent().animate({top: 0%}, 1000);
//   }
//   else {
//     $(this).removeClass('fa-cheveron-down').addClass('fa-info-circle');
//     $(this).parent().parent().animate({top: 90%}, 1000);
//   }
//
// }
