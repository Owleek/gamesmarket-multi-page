$(document).ready(function(){
  const overlay = $(".overlay");
  var browserName = navigator.userAgent;

  $(".menuToggler").click(function () {
    $("body").toggleClass("active");
  });

  let $dp = $('.download-pane');
  
  $(window).scroll(function() {
  	if ($(window).scrollTop() >= 100 && $dp.is(':hidden')) {
		$dp.fadeIn();
  	}
  	else if ($(window).scrollTop() < 100 && !$dp.is(':hidden')) {
		$dp.fadeOut();
  	}
  });

	if (browserName.search(/Firefox/) > 0 || browserName.search(/YaBrowser/) > 0 || browserName.search(/OPR/) > 0) {
		overlay.addClass("overlay_arrow-tr");
	}
	else if (browserName.search(/Edge/) > 0) {
		overlay.addClass("overlay_arrow-b");
		$(".overlay__title").html("После загрузки нажмите \"Выполнить\"");
	}	
	else if (browserName.search(/Chrome/) > 0 || browserName.search(/Safari/) > 0) {
		overlay.addClass("overlay_arrow-bl");
	}

  overlay.on("click", function(){
      $(this).hide();
  })
});

function showOverlay() {
  $(".overlay").show();
}