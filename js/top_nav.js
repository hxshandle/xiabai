$(function() {

  function toggleTopNav() {
    var scrollTop = $(window).scrollTop();
    var WH = $(window).height();
    if (scrollTop > WH - 83) {
      $('#top-nav').fadeIn(1000);
    } else {
      $('#top-nav').fadeOut(1000);
    }
  }

  $(window).on('scroll', toggleTopNav);

});

