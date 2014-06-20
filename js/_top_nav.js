$(function() {

  $('#top-nav,#social-link').hide();
  function toggleTopNav() {
    var scrollTop = $(window).scrollTop();
    var WH = $(window).height();
    if (scrollTop > WH - 83) {
      $('#top-nav,#social-link').fadeIn(1000);
    } else {
      $('#top-nav,#social-link').fadeOut(1000);
    }
  }

  $(window).on('scroll', toggleTopNav);

});

