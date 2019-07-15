
// Smooth Scrolling Effect

$(document).ready(function () {
$(document).on("scroll", onScroll);
$('a[href^="#"]:not(.carousel-control)').on('click', function (e) {
	e.preventDefault();
	$(document).off("scroll");
	
	$('a').each(function () {
		$(this).removeClass('active');
	})
	$(this).addClass('active');
  
	var target = this.hash,
		menu = target;
	$target = $(target);
	$('html, body').stop().animate({
		'scrollTop': $target.offset().top+2
	}, 500, 'swing', function () {
		window.location.hash = target;
		$(document).on("scroll", onScroll);
	});
});
});
function onScroll(event){
var scrollPos = $(document).scrollTop();
$('nav a').each(function () {
	var currLink = $(this);
	var refElement = $(currLink.attr("href"));
	if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
		$('nav ul li a').removeClass("active");
		currLink.addClass("active");
	}
	else{
		currLink.removeClass("active");
	}
});
}



// Js Index
(function($) {
    "use strict";

    // Preloader
    $(window).on('load', function() {
        $('.preloader-wrap').fadeOut('slow', function() { $(this).remove(); });
    });



    // Adjust Header Menu On Scroll Down
    $(window).scroll(function() {
        var wScroll = $(this).scrollTop();

        if (wScroll > 100) {
            $('.navbar-default').addClass('sticky');
        } else {
            $('.navbar-default').removeClass('sticky');
        }

        // Scroll top 
        if (wScroll > 800) {
            $('.scroll-top').css('display', 'block');
        } else {
            $('.scroll-top').css('display', 'none');

        }
		
		// Scroll down icon 
        if (wScroll < 800) {
            $('.scroll-down').css('display', 'block');
        } else {
            $('.scroll-down').css('display', 'none');

        }

    });



}(jQuery));