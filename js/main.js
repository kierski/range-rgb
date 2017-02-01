var box = document.querySelector('.box');
var inputs = document.querySelectorAll('.box__range');

Array.prototype.forEach.call(inputs, function (input) {
	input.addEventListener('change', setBackground);
});

function setBackground() {

	var red = inputs[0].value;
	var green = inputs[1].value;
	var blue = inputs[2].value;
	var radius = inputs[3].value;
	var opacity = inputs[4].value;

	var rgb = 'rgb(' + red + ', ' + green + ', ' + blue + ')';

	box.style.borderRadius = radius + '%';
	box.style.opacity = opacity;
	document.body.style.background = rgb;

}
