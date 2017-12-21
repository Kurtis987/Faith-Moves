$(document).ready(function() {
    selectStyle();

    /* check to see if we need restyle on
       window resize */
    $(window).resize(selectStyle);

    $("a[href='prayer.html']").hover(function(){
			$("#prayer-link-img").replaceWith("<img id='prayer-link-img' src='img/prayerHover.png' alt='prayer icon' height='20' width='20'>");
		}, function(){
			$("#prayer-link-img").replaceWith("<img id='prayer-link-img' src='img/prayer.png' alt='prayer icon' height='20' width='20'>");
	});

});


    /* use css of an element to see
       which media query we're using
       then select the correct class
       once we determine the screen size */
function selectStyle() {
    //if ($(".caret").css("position") == "absolute" ) {
    if($(window).width() <= 767) {
    	//screen is < 768px switch to glyphicon-plus
        $("span.caret").removeClass("caret").addClass("glyphicon").addClass("glyphicon-plus");
    }
    else {
    //if($(".glyphicon-plus").css("left") == "2px") {
    	//screen is >= 768 switch to caret
    	$("span.glyphicon-plus").removeClass("glyphicon").removeClass("glyphicon-plus").addClass("caret");
    	
    }
}
