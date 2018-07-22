$(function() 
{  
	$('input').iCheck({
		checkboxClass: 'icheckbox_square',
		radioClass: 'iradio_square',
    increaseArea: '20%' // optional
});
	$('.date-of-birth').daterangepicker({
		singleDatePicker: true,
		showDropdowns: true
	});
});