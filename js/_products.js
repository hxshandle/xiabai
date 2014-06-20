$(function(){
  $('#c5-1').parallax(0, 0.3, 1800);
  $('#c5-2').parallax(0, 0.2, 2500, true);
  $('#c5-3').parallax(0, 0.4, 1300);


  function _initSeason($el){
    var $viewer = $el.find('.viewer');
    var count = $viewer.children().length;
    var width = count*401;
    $viewer.css({width:width+'px'});

    $el.find('.slider').slider();

  }
  
  $('#products .season:first').addClass('active');
  _initSeason($('#products .season:first'));




});
