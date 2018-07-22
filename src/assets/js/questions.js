$(function() {  
	$('#user-type').select2();
	$(document).ready( function () {
		
		$('input').iCheck({
			checkboxClass: 'icheckbox_square',
			radioClass: 'iradio_square',
    increaseArea: '20%' // optional
});
		$("#yn").show();
		$("#cor").hide();
		$("#tf").hide();
		$( "select" ).change(function () {
			$( "select option:selected" ).each(function() {

				if($(this).text()=='True/False')
				{
					$("#tf").show();
					$("#cor").hide();
					$("#yn").hide();

					return;
				}
				else
					if($(this).text()=='Correct/Incorrect')
					{
						$("#tf").hide();
						$("#cor").show();
						$("#yn").hide();

						return;
					}
					else
						if($(this).text()=='Yes/No')
						{
							$("#tf").hide();
							$("#cor").hide();
							$("#yn").show();

							return;
						}
					}); 
		});
		$('#add-row').on('click',function(){
      //get number of row
      var i = $('#options > .form-group').length;
      var alphabet = String.fromCharCode(65 + i);
      // add row
      var row = '<div class="form-group row">' +        
      '<div class="col-sm-1 offset-sm-2">' +
      '<p class="form-control-plaintext">'+ alphabet +'. <input type="checkbox" class="checkbox" value="1"  name="choose"></p>' +
      '</div>' +
      '<div class="col-sm-9">' +
      '<input type="text" class="form-control sem-semester" name="options" placeholder="Option">' + 
      '</div>' +
      '</div>';
      $('#options').append(row);
      // bind event for new Checkbox
      var lastCheckbox = $('#options > .form-group').last().find('input[type=checkbox]');
      $(lastCheckbox).iCheck({
      	checkboxClass: 'icheckbox_square',
      	radioClass: 'iradio_square',
      	increaseArea: '20%'
      });
  });

		$('#del-row').on('click',function(){
			if ($('#options > .form-group').length > 2) {
				$('#options > .form-group').last().remove();
			}
		});
		
	});
});