
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
		// nav bar
        if (wScroll > 150) {
            $('.navbar-default').addClass('sticky');
        } else {
            $('.navbar-default').removeClass('sticky');
        }
		
		//change bg from black to white
/*		if (wScroll > 400) {
			$("body").removeClass('darkbg');
        } else {
            $("body").addClass('darkbg');
        }*/
		
		//change bg from black to white
		if (wScroll < 500) {
			$('.changebg').css({'background-color':'black', 'color':'white'});     
        } else {
			$('.changebg').css({'background-color':'white','color':'black'});
        }
		
		
		if (wScroll < 400) {
			$('.changebgVideo').css({'background-color':'black', 'color':'white'});     
        } else {
			$('.changebgVideo').css({'background-color':'white','color':'black'});
        }

		
        // Scroll top 
        if (wScroll > 1000) {
            $('.scroll-top').css('display', 'block');
        } else {
            $('.scroll-top').css('display', 'none');

        }
		
		// Scroll down icon 
        if (wScroll < 1000) {
            $('.scroll-down').css('display', 'block');
        } else {
            $('.scroll-down').css('display', 'none');

        }

    });


}(jQuery));

