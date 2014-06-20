$(function() {
  $('#c-5').parallax(0, 0.3, 1800);
  $('#c-6').parallax(0, 0.2, 2500, true);
  $('#c-7').parallax(0, 0.4, 1300);

  function _jScrollPanel($el) {
    $el.jScrollPane({
      verticalDragMaxHeight: 32
    });
  }

  $('#about-us .brand-entry:first').addClass("active");
  _jScrollPanel($('#about-us .brand-entry:first .cnt'));

  $('#about-us .nav a').click(function() {
    var $this = $(this);
    if ($this.hasClass('active')) {
      return;
    }
    $('#about-us .nav a.active').removeClass('active');
    $this.addClass('active');
    var ref = $this.data('ref');
    $('#about-us .brand-entry.active').removeClass('active');
    $('#about-us .brand-entry').eq(ref).addClass('active');
    _jScrollPanel($('#about-us .brand-entry').eq(ref).find('.cnt'));

  });

});

