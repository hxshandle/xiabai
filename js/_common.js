var global = {};

function onResize() {
  var $win = $(window);
  global.winWidth = $win.width();
  global.winHeight = $win.height();
}

function scrollable(selector) {
  $(selector).jScrollPane();
}

function switchContent(toggleSelector, relatedSelector) {
  $(toggleSelector).click(function() {
    $(toggleSelector).filter('.active').removeClass('active');
    var $this = $(this);
    var ref = $this.data('ref');
    $this.addClass('active');
    $(relatedSelector).filter('.active').removeClass('active').css({
      display: 'none'
    });
    $('#' + ref).fadeIn().addClass('active').jScrollPane();
  });
}

function moveJSlider(selector, direction) {
  var $act = $(selector);
  var p = $act.data('plugin_slidesjs');
  if (direction < 0) {
    p.previous();
  } else {
    p.next();
  }
}

$(function() {
  onResize();
  $(window).resize(onResize);
});

var videoOptions = {
  videoWidth: 713,
  videoHeight: 530,
  enableAutosize: true,
  pluginPath: '/sites/xianxiang/player/',
  flashName: 'flashmediaelement.swf',
  features: ['playpause', 'progress', 'current', 'duration', 'tracks', 'volume'],
  plugins: ['flash'],
  success: function(mediaElement, node) {}
};

function playVideo(videoSrc,poster) {
  var videoTemplate = '<video id = "video-player" width="713" height="530" poster="' + poster + '" controls="controls" autoplay="true">';
  videoTemplate += '<source type="video/mp4" src="' + videoSrc + '"/>';
  videoTemplate += '<object width="713" height="530" type="application/x-shockwave-flash" data="../player/flashmediaelement.swf">';
  videoTemplate += '<param name="movie" value="../player/flashmediaelement.swf"/>';
  videoTemplate += '<param name="flashvars" value="controls=true&file=' + videoSrc + '"/>';
  videoTemplate += '<img src="' + poster + '" width="713" height="530" title="No video playback capabilities"/>';
  videoTemplate += '</object>';
  videoTemplate += '</video>';
  $.colorbox({
    html: videoTemplate,
    onComplete: function() {
      var player = new MediaElementPlayer('#video-player', videoOptions);
    }
  });
}

