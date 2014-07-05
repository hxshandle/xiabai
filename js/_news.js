$(function() {
  function showNewsDetails() {}

  showNewsDetails.prototype = function() {
    var $element = $('#news-details-mask');
    var _isWalk = false;
    function _setLayout() {
      $element.css({
        width: global.winWidth + 'px',
        height: global.winHeight + 'px'
      });
      $('.article', $element).css({
        height: (global.winHeight - 300) + 'px'
      });
    }
    function _clear() {
      $('.title,.sub,.article', $element).removeData('jsp').html('');

    }
    function _show(title, sub, article) {
      _clear();
      _setLayout();
      $('.sub', $element).text(sub);
      $('.title', $element).text(title);
      $('.article', $element).html(article);
      setTimeout(function(){
        $('.article',$element).jScrollPane();
      },500);
      $element.addClass('active');
    }
    function _close() {
      $element.removeClass('active');
    }
    function init() {
      $('a.close').click(_close);
    }

    init();
    return {
      show: function(title, sub, article, isWalk) {
        _isWalk = isWalk;
        _show(title, sub, article);

      }
    }
  } ();
  window.Details = new showNewsDetails();
});

$(function() {
  $('#c4-1').parallax(0, 0.3, 1800);
  $('#c4-2').parallax(0, 0.2, 2500, true);
  $('#c4-3').parallax(0, 0.4, 1300);

  function _slidesjs(sel) {
    if ($(sel).data('plugin_slidesjs')) {
      console.log('cancel slidesjs');
      return;
    }
    $(sel).slidesjs({
      pagination: {
        active: false
      },
      navigation: {
        active: false
      },
      height: 430,
      width: 1000
    });
  }

  _slidesjs('#news .news');

  //$('#news .news-entry:first').addClass('active');
  //
  //
  //
  function _activeSection(number) {
    number = parseInt(number);
    number = number + 1;
    $('.news-section').hide();
    var sliderjs = $('#news .news').data('plugin_slidesjs');
    sliderjs.goto(number);
    $('#news-section-' + --number).addClass('active');
    _slidesjs('#news-section-' + number);
    /*
    setTimeout(function(){
      $('#news .news-section.active .news-entry:first').fadeIn();
    },1000);
    */

  }

  $('#news .menu a').click(function() {
    var $this = $(this);
    if ($this.hasClass('active')) {
      return;
    }
    $('#news .menu a.active').removeClass('active');
    $('#new .news-section.active').removeClass('active');
    $this.addClass('active');
    _activeSection($this.data('ref'));
    setTimeout(_updateNavText, 0);
  });

  _activeSection(0);

  function _updateNavText() {
    var _ins = $('#news .news .news-section.active').data('plugin_slidesjs');
    var total = _ins.data['total'];
    var curIdx = _ins.data['current'];
    var text = "" + (curIdx + 1) + "/" + total;
    $('#news .nav-cnt').text(text);
  }

  $('#news-pre').click(function() {
    moveJSlider('#news .news .news-section.active', - 1);
    setTimeout(_updateNavText, 400);
  });

  $('#news-next').click(function() {
    moveJSlider('#news .news .news-section.active', 1);
    setTimeout(_updateNavText, 400);
  });

  _updateNavText();

  // for video
  $('#news .video-entry .left').click(function() {
    var $this = $(this);
    playVideo($this.data('source'));

  });

  // for more
  $('#news .pod .more').click(function() {
    var $this = $(this);
    var cnt = $this.next('.cnt-hide');
    var title = $('.title', cnt).text();
    var sub = $('.sub', cnt).text();
    var article = $('.article', cnt).html();
    Details.show(title, sub, article, true);
  });

});

