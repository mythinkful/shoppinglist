function addItem () {
	var text = $("#item").val();
	var preText = '<p><input class="done" type="checkbox" /><span>';
	var postText = '</span></p>';
	
	text = $.trim(text);  //trim spaces from input box
	
	if (text !=""){   //validate empty input box
		$("#list").append(preText +text+ postText);
		$("#item").val('');
		return false;
	}
}

function deleteItem() {	
	console.log('got there delete func.');
  $(':checked').parent().remove();
}

function finishItem() {
	var isChecked = $('#chkSelect').attr('checked');
	if($(this).is(':checked')){
			$(this).next("span").css("text-decoration", "line-through");
		} else {
			$(this).next().css("text-decoration", "none");
		}
}


$(function() {
	$("#add").on('click', addItem);
	$('#delete').on('click', deleteItem);
	$(document).on('click', '.done', finishItem);

});