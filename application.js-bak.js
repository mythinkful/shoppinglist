function addItem () {
	var text = $("#item").val();
	var preText = '<p><input class="done" type="checkbox" /><span>';
	var postText = '</span></p>';
	
	text = $.trim(text);  
	if (text !=""){   
		$("#list").append(preText +text+ postText);
		$("#item").val('');
		return false;
	}
}

function deleteItem() {	
  $(':checked').parent().remove();
}

function finishItem() {
	if($(this).is(':checked')){
			$(this).next("span").css("text-decoration", "line-through").css("color","grey");
		} else {
			$(this).next().css("text-decoration", "none").css("color","black");;
		}
}

$(function() {
	$("#add").on('click', addItem);
	$('#delete').on('click', deleteItem);
	$(document).on('click', '.done', finishItem);

});