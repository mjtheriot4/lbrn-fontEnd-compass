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

  // var summaryOffset             = $('#eventSummary').offset().top,
  //     whenAndWhereOffset        = $('#eventWhenAndWhere').offset().top,
  //     // participantsOffset        = $('#eventParticipants').offset().top,
  //     lodgingAndExpensesOffset  = $('#eventLodgingAndExpenses').offset().top,
  //     registrationOffset        = $('#eventRegistration').offset().top;
  //     // archiveMediaOffset        = $('#eventArchiveMedia').offset().top;

  $(window).scroll(function() {
    contentHeight = $('#matchHeight').css('height');
    $('#lbrnEventSidebar').css('height', contentHeight);

    // var scrollTop                   = $(window).scrollTop(),
    //     summaryDistance             = (summaryOffset - scrollTop),
    //     whenAndWhereDistance        = (whenAndWhereOffset - scrollTop),
    //     // participantsDistance        = (participantsOffset - scrollTop),
    //     lodgingAndExpensesDistance  = (lodgingAndExpensesOffset - scrollTop),
    //     registrationDistance        = (registrationOffset - scrollTop),
    //     // archiveMediaDistance        = (archiveMediaOffset - scrollTop)
    //     toggleClass                 = 1;
    //
    // if (summaryDistance <= 10 && summaryDistance >= 0){
    //   if (toggle == 1){
    //     $('#eventSummary').removeClass('active');
    //     $('#eventWhenAndWhere').removeClass('active');
    //     // $('#eventParticipants').removeClass('active');
    //     $('#eventLodgingAndExpenses').removeClass('active');
    //     $('#eventRegistration').removeClass('active');
    //     // $('#eventArchiveMedia').removeClass('active');
    //     toggle = 0;
    //   }
    // }
    // else {toggle = 1}
    // if (whenAndWhereDistance <= 10 && whenAndWhereDistance >= 0){
    //   if (toggle == 1){
    //     $('#eventSummary').removeClass('active');
    //     $('#eventWhenAndWhere').addClass('active');
    //     // $('#eventParticipants').removeClass('active');
    //     $('#eventLodgingAndExpenses').removeClass('active');
    //     $('#eventRegistration').removeClass('active');
    //     // $('#eventArchiveMedia').removeClass('active');
    //     toggle = 0;
    //   }
    // }
    // else {toggle = 1}
  });
});
