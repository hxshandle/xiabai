var WW, WH;
function landingLayout() {
	$('.landing-section').css({
		height: WH + 'px'
	});
  $('.scroll-down').css({left:(WW/2-31)+'px'});
  TweenLite.to('.scroll-down',2,{bottom:'20px', ease:Elastic.easeOut});
}

function doResize() {
	WW = $(window).width();
	WH = $(window).height();
	landingLayout();
}

function doNivoSlider(){
  $('.nivoSlider').nivoSlider({
    effect:'fade',
    pauseTime:5000,
    animSpeed:1500,
    directionNav:false,
    controlNav:false,
    pauseOnHover:false
  });
}

$(function() {
	$('.jScrollPane').jScrollPane();
	$(".img-liquid-fill").imgLiquid();
	$(".img-liquid-fill-top").imgLiquid({verticalAlign:'top'});
	$('.top-menu a,.scroll-down').smoothScroll({offset:-99});
	doResize();
	$(window).resize(doResize);
  doNivoSlider();
});

