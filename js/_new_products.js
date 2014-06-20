$(function() {
  $('#c-1').parallax(0, 0.3, 1800);
  $('#c-2').parallax(0, 0.2, 2500, true);
  $('#c-3').parallax(0, 0.4, 1300);
  $('#c-4').parallax(0, 0.1, 1300);

  var _l = (global.winWidth - 1000)/2+580;
  $('.pod-outer').css({'left':_l+'px'});
  
  $('.pods-inner').slidesjs({
    pagination: {
      active: false
    },
    navigation: {
      active: false
    },
    height: 341,
    width:321
  });

  function moveSlider(direction){
    var $act = $('.pods-inner');
    var p = $act.data('plugin_slidesjs');
    if(direction < 0){
      p.previous();
    }else{
      p.next();
    }
  }

  $('#new-products .nav-pre').click(function(){
    moveSlider(-1);
  });
  $('#new-products .nav-next').click(function(){
    moveSlider(1);
  });

});

