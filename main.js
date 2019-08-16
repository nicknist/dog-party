var someDogs = document.querySelector('.update');
var textBox = document.getElementById('inputText');
var submit = document.querySelector('.submitText');

submit.addEventListener('click', function() {
  var change = textBox.value;
  someDogs.innerText = change;
})

// var box = document.querySelector('.box');
// var colorInput = document.getElementById('color');
// var changeColorButton = document.querySelector('.change-color');
//
//
// changeColorButton.addEventListener('click', function () {
//   var color = colorInput.value;
//   box.style.backgroundColor = color;
// });
