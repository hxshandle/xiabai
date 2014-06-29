$(function() {
  $('#c4-1').parallax(0, 0.3, 1800);
  $('#c4-2').parallax(0, 0.2, 2500, true);
  $('#c4-3').parallax(0, 0.4, 1300);



  function _slidesjs(sel){
    if($(sel).data('plugin_slidesjs')){
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
  function _activeSection(number){
    number = parseInt(number);
    number = number+1;
    $('.news-section').hide();
    var sliderjs = $('#news .news').data('plugin_slidesjs');
    sliderjs.goto(number);
    $('#news-section-'+ --number).addClass('active');
    _slidesjs('#news-section-'+ number);
    /*
    setTimeout(function(){
      $('#news .news-section.active .news-entry:first').fadeIn();
    },1000);
    */

  }

  $('#news .menu a').click(function(){
    var $this = $(this);
    if($this.hasClass('active')){
      return;
    }
    $('#news .menu a.active').removeClass('active');
    $('#new .news-section.active').removeClass('active');
    $this.addClass('active');
    _activeSection($this.data('ref'));
    setTimeout(_updateNavText,0);
  });

  _activeSection(0);

  function _updateNavText(){
    var _ins = $('#news .news .news-section.active').data('plugin_slidesjs');
    var total = _ins.data['total'];
    var curIdx = _ins.data['current'];
    var text = "" + (curIdx+1)+"/"+total;
    $('#news .nav-cnt').text(text);
  }

  $('#news-pre').click(function() {
    moveJSlider('#news .news .news-section.active', - 1);
    setTimeout(_updateNavText,400);
  });

  $('#news-next').click(function() {
    moveJSlider('#news .news .news-section.active', 1);
    setTimeout(_updateNavText,400);
  });

  _updateNavText();

});

