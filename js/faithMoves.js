$(document).ready(function() {
    selectStyle();
    
    /* check to see if we need restyle on window resize */
    $(window).resize(selectStyle);

    $("a[href='prayer.html']").hover(function(){
			$("#prayer-link-img").replaceWith("<img id='prayer-link-img' src='img/prayerHover.png' alt='prayer icon' height='20' width='20'>");
		}, function(){
			$("#prayer-link-img").replaceWith("<img id='prayer-link-img' src='img/prayer.png' alt='prayer icon' height='20' width='20'>");
	});

});


function selectStyle() { 
    //bootstrap seems to size accourding to innerWidth it is also the width Chrome reports
    var responsive_width = window.innerWidth; 
 

    var browser = navigator.userAgent;
 
    //test browser to determine which breakpoint to use
    if(browser.search("Edge") == -1 && browser.search("NET CLR") == -1 && responsive_width < 521 
        || browser.search("Edge") != -1 && $(window).width() <= 503 || 
        $(window).width() < 504 && browser.search("NET CLR") != -1) {
        $('.player').addClass("player-small-screen");
    }
    else{
        $('.player').removeClass("player-small-screen");
    }
    if(responsive_width <= 767) {
        //screen is < 768px switch to glyphicon-plus
        $("span.caret").removeClass("caret").addClass("glyphicon").addClass("glyphicon-plus");
    }
    else { 
        //screen is >= 768 switch to caret
        $("span.glyphicon-plus").removeClass("glyphicon").removeClass("glyphicon-plus").addClass("caret");
        
    } 
    //have to use a combination of width commands to achieve affect here
    if($(window).width() <= 776 && responsive_width > 767)
    {
        $('.player').addClass('player-avoid-menu');
    }
    else
    {
        $('.player').removeClass('player-avoid-menu');
    }
}
