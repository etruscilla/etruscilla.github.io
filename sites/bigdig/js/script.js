$(document).ready(function() {
    $('#global-nav li a').click(function() {
    	$('#global-nav li a').removeClass('nav-active');
    	$(this).addClass('nav-active');
    });
	$('#inner-nav li a').click(function() {
    	$('#inner-nav li a').removeClass('active');
    	$(this).addClass('active');
    });
});
