$(document).ready(function() {
	$("a[href^='#']").click(function(){
		var divposition = $(this.href.substring(this.href.lastIndexOf("#"))).offset();
		$("html, body").animate({scrollTop: divposition.top-60}, "slow");
	});
});