$(function() {
  $('#c4-1').parallax(0, 0.3, 1800);
  $('#c4-2').parallax(0, 0.2, 2500, true);
  $('#c4-3').parallax(0, 0.4, 1300);

  $('#news .news-entry:first').addClass('active');

  var totalNewsCount = $('.news-entry').length;
  var currentNewsIndex = 0;

  $('#new-pre').click(function() {
    if (currentNewsIndex == 0) {
      return;
    }

  });

  $('#new-next').click(function() {
    if (currentNewsIndex == totalNewsCount - 1) {
      return;
    }

  });

});
