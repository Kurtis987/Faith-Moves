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
    //responsive width fix credit to forsvunnet on https://github.com/eddiemachado-zz/bones/issues/468
    var responsive_width = window.innerWidth || $(window).width();

    if(responsive_width < 526)
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
    if(responsive_width <= 791 && responsive_width > 767)
    {
        $('.player').addClass('player-avoid-menu');
    }
    else
    {
        $('.player').removeClass('player-avoid-menu');
    }
}
