$(document).ready(function() {
	if(location.href.indexOf("#")!=-1){
		var divposition = $(location.href.substring(location.href.lastIndexOf("#"))).offset();
		$("html, body").animate({scrollTop: divposition.top}, "slow");
	}
	$("a[href*='#']").click(function(){
		var divposition = $(this.href.substring(this.href.lastIndexOf("#"))).offset();
		$("html, body").animate({scrollTop: divposition.top-60}, "slow");
	});
});