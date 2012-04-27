// jQuery Function	
$(document).ready(function() {
	
	var apform = $('#addPlayerForm');

	apform.validate({
		invalidHandler: function(form, validator) {},
		submitHandler: function(){
			var id = Math.floor(Math.random()*1000001);
			var data = apform.serializeArray();
			localStorage.setItem(id, JSON.stringify(data));
			console.log(data);
			alert("Player Saved!");
				window.location.reload(apform);
		}
	});
});