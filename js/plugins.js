// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function() {};
  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
} ());

// Place any jQuery/helper plugins in here.
$(function() {
  // for tween view for contact us
  var scrollOffSet = 0;
  if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i))) {
    scrollOffSet = - 500;
    $(".scroll-down").css("padding-top", "20px");
  }
  var scrollController = $.superscrollorama();

  scrollController.addTween("#new-products .pod-outer", TweenMax.from($("#new-products .pod-outer"), 1, {
    css: {
      opacity: "0",
      top: "60px",
    }
  }), 0, 400);

  scrollController.addTween("#about-us .outer", TweenMax.from($("#about-us .outer"), 1, {
    css: {
      opacity: "0",
      top: "0px",
    }
  }), 0);
  scrollController.addTween("#vip .outer", TweenMax.from($("#vip .outer"), 1, {
    css: {
      opacity: "0",
      top: "-100px",
    }
  }), 0);
  scrollController.addTween("#contact .cnt", TweenMax.from($("#contact .cnt"), 1, {
    css: {
      opacity: "0",
      top: "100px",
    }
  }), 0);
  scrollController.addTween("#contact .map", TweenMax.from($("#contact .map"), 1, {
    css: {
      opacity: "0",
      top: "-100px",
    }
  }), 0);
});

