$(function() {
  $('#c4-1').parallax(0, 0.3, 1800);
  $('#c4-2').parallax(0, 0.2, 2500, true);
  $('#c4-3').parallax(0, 0.4, 1300);


  var totalNewsCount = $('.news-entry').length;
  var currentNewsIndex = 0;

  $('#news .news').slidesjs({
    pagination: {
      active: false
    },
    navigation: {
      active: false
    },
    height: 430,
    width: 1000
  });
  //$('#news .news-entry:first').addClass('active');
  //
  function _updateNavText(){
    var _ins = $('#news .news').data('plugin_slidesjs');
    var total = _ins.data['total'];
    var curIdx = _ins.data['current'];
    var text = "" + (curIdx+1)+"/"+total;
    $('#news .nav-cnt').text(text);
  }

  $('#news-pre').click(function() {
    moveJSlider('#news .news', - 1);
    setTimeout(_updateNavText,400);
  });

  $('#news-next').click(function() {
    moveJSlider('#news .news', 1);
    setTimeout(_updateNavText,400);
  });
  _updateNavText();

});

