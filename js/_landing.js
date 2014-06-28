$(function() {
  // define the content height
  var H = 341;
  function _center() {
    var $landing = $('#landing');
    var WH = $(window).height();
    var h = global.winHeight < 600 ? 600: global.winHeight;
    $landing.css({
      height: h + 'px'
    });
    var marginTop = (h - 341) / 2;
    $('#landing .wrapper').css({
      "padding-top": marginTop + 'px'
    });
  }
  _center();
  $(window).resize(_center);

  setTimeout(function(){$(window).resize();},0);
  


  // for progress
  var timer = setInterval(progress, 100);
  var val = 0,
    progressEl = $("#landing .brand-gray"),
    progressTextEl = $("#landing .no");

  function progress() {
    val++;
    progressEl.css({
      height: (100-val)+'%'
    });
    progressTextEl.text(val);
    if (val == 100) {
      clearInterval(timer);
    }
  }
});

