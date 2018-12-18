$(document).ready(function() {
	$(window).scroll(function(){
		if ($('html,body').scrollTop()>200) {
			$('.menu').addClass('chucam');
			
			}
		else{
			$('.menu').removeClass('chucam');
			
		};
	});

});
	
