

	// jQuery Function
	
	var parsePlayerForm = function(data){
		//uses form data here
		console.log(data);
	}
	
	$(document).ready(function() {
		
		var apform = $('#addPlayerForm');
		
		apform.validate({
			invalidHandler: function(form, validator) {},
			submitHandler: function() {
				var data = apform.serializeArray();
				parsePlayerForm(data);
				//storeData(this.key);
			}
		});
		
	});

// Wait until the DOM is ready.
//window.addEventListener("DOMContentLoaded", function() {
	
	function getCheckboxValue(){
		if($('starter').checked) {
			starterValue = $("#starter").val();
		}else {
			starterValue = "No";
		}
	};

	// Create StoreData Function
	function storeData(key){
		//If there is no key, this is a new item and we need to generate a new key
		if(!key){ 
		//Create Random Key
		var 	id									= Math.floor(Math.random()*1000001);
		} else {
			//else, set the id to the existing key we're editing so that it will save over the data.
			//The key is the same key that's been passed along from the editSubmit event handler
			//to the validate function, and then passed here, into the storeData function.
			id = key;
		}
		getCheckboxValue();
		// gather up all our form field values and store in an object.
		// Object properties contain array with the form label and input value.
		var item = {};
				item.position				= ["Position:", $('#position').val()];
				item.pname				= ["Player Name:", $('#pname').val()];
				item.team					= ["Team Name:", $('#team').val()];
				item.bye						= ["Bye Week:", $('#byeweek').val()];
				item.starter				= ["Starter:", starterValue];
				item.skill						= ["Skill Level:", $('#skill').val()];
				item.notes					= ["Notes:", $('#notes').val()];
		//Save Data into Local Storage: Use Stringify to convert our object to a string.
		localStorage.setItem(id, JSON.stringify(item));
		// alert("Player Saved!");
	};
	
	// var saveLink = $("submit");
	// saveLink.addEventListener("click", storeData());

