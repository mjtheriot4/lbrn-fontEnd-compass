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
    var contentHeight = $('div.content').css('height');
    $('aside.lbrn-eventsidebar').css('height') = contentHeight;
  });
  $('.collapseTrigger').click(function() {
    console.log('fired');
    $(this).siblings('.collapse').toggleClass('expand');
    $(this).toggleClass('fa-chevron-right').toggleClass('fa-chevron-down');
  });
  var contentHeight = $('div.content').css('height');
  // $('aside.lbrn-eventsidebar').css('height') = contentHeight;
});
