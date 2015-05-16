
var instructions = [];
var result = 0;
var displayNumber = '';}

	////EVENT LISTENERS///

	[].forEach.call(document.querySelectorAll('.number'), function(element){
	  element.addEventListener('click', numberPressed);
	}, false);

	[].forEach.call(document.querySelectorAll('.operations'), function(element){
	  element.addEventListener('click', operatorPressed);
	}, false);

	[].forEach.call(document.querySelectorAll('.'), function(element){
	  element.addEventListener('click', plusMinus);
	}, false);


///Botton Press Functions///
	function numberPressed(event) {
		var button = event.target;
		var number = button.textContent;
		instructions.push(number);
    displayNumber+=number;
		changeContent(displayNumber);
	}
