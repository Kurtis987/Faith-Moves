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



/*function selectStyle() { 
    //responsive width fix credit to forsvunnet on https://github.com/eddiemachado-zz/bones/issues/468
    var responsive_width = window.innerWidth || $(window).width();

    if(responsive_width <= 496)
    {
        $('#logo_live365').addClass('img-logo_live365-Left');
        $('.player').addClass('player-small-screen');
    }
    else
    {
        $('#logo_live365').removeClass('img-logo_live365-Left');
        $('.player').removeClass('player-small-screen');
    }
    if(responsive_width <= 767) {
    	//screen is < 768px switch to glyphicon-plus
        $("span.caret").removeClass("caret").addClass("glyphicon").addClass("glyphicon-plus");
    }
    else { 
    	//screen is >= 768 switch to caret
    	$("span.glyphicon-plus").removeClass("glyphicon").removeClass("glyphicon-plus").addClass("caret");
    	
    }
    if(responsive_width <= 804 && responsive_width > 767)
    {
        $('.player').addClass('player-avoid-menu');
    }
    else
    {
        $('.player').removeClass('player-avoid-menu');
    }
}*/

function selectStyle() { 
    //bootstrap seems to size accourding to innerWidth it is also the width Chrome reports
    var responsive_width = window.innerWidth;
    //$(window).width() is the width used for my custom breakpoint and is the actual width
    console.log("responsive: "+ responsive_width);
    console.log("window: "+ $(window).width());

    var browser = navigator.userAgent;
    if(browser.search("Edge") == -1)
    {
        console.log("not edge");

    } 
    else if(browser.search("NET CLR") != -1){
        console.log("ie");
    }
    else if(browser.search("Edge") != -1 && $(window).width() <= 503 )
    {
        console.log("Edge test passed")
    }
    else if(browser.search("Edge") == -1 && responsive_width < 521)
    {
        console.log("Catching chrome test");
    }
    else
    {
        console.log(browser.search("Edge"));
        console.log(browser);
        console.log("Edge");
    }

    if(browser.search("Edge") == -1 && responsive_width < 521 
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
