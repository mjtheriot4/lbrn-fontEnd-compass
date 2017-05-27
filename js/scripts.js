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
});
