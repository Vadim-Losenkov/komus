/*
** Menu
** @use jquery 3+
**
*/

$(document).ready(function(e) {

	$('body').bind('keypress', function(e) {
		console.log (e.keyCode);
		if(e.keyCode==21){
			if ($('body').hasClass('unicorn')){
				console.log ('unicorn mode off');
				$('body').removeClass('unicorn');
			} else {
				console.log ('unicorn mode on');
				$('body').addClass('unicorn');					
			}
			
		}
	});

	
	/* hide */
	$(window).click(function() {  
		if ($('#menuMore').hasClass('active')){
			$('#menuMore').removeClass('active').focus();
		}		
	});
	
	/* show */
	$('#subMenuActivator').click(function(event){
		$('#menuMore').toggleClass('active').focus();
		event.stopPropagation();
	});		


	/* mobile menu  */
	$('.mobileMenuHamburger').click(function(event){
		$('.mainMenu__content').toggleClass('active').focus();
		event.stopPropagation();
		return false;
	});		
	
	$('.mobileMenuCloseBtn').click(function(event){
		$('.mainMenu__content').removeClass('active').focus();
		event.stopPropagation();
		return false;
	});				
	

});