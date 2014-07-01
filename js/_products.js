$(function() {
  $('#c5-1').parallax(0, 0.3, 1800);
  $('#c5-2').parallax(0, 0.2, 2500, true);
  $('#c5-3').parallax(0, 0.4, 1300);

  $('#products .menu a:first').addClass('active');

  $('#products .menu a').click(function() {
    var $this = $(this);
    var ref = $this.data('ref');
    if ($this.hasClass('active')) {
      return;
    }
    var $lastSeason = $('#products .menu a.active');
    $lastSeason.removeClass('active');
    var lastRef = $lastSeason.data('ref');
    $this.addClass('active');
    $('#'+lastRef).removeClass('active').hide();
    $('#'+ref).addClass('active').hide().fadeIn();
    _initSeason($('#'+ref));
    
  });

  function _moveProd($el, val) {
    var elWidth = $el.width();
    var viewWidth = $el.parent().width();
    var left = - ((elWidth - viewWidth) / 100) * val;
    $el.css({
      left: left + 'px'
    });
  }

  function _initSeason($el) {
    var $viewer = $el.find('.viewer');
    var count = $viewer.children().length;
    var width = count * 401;
    $viewer.css({
      width: width + 'px'
    });
    $el.find('.slider').slider({
      slide: function(evt, obj) {
        var $this = $(this);
        var targetEl = $this.parent().prev();
        _moveProd(targetEl, obj.value);
      }
    });
  }

  $('#products .season a').click(function() {
    ImageTour.show($(this));
  });

  $('#products .season:first').addClass('active');
  _initSeason($('#products .season:first'));

});

