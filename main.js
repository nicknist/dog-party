var someDogs = document.querySelector('.update');
var textBox = document.getElementById('inputText');
var submit = document.querySelector('.submitText');

submit.addEventListener('click', function() {
  var change = textBox.value;
  someDogs.innerText = change;
})

var howButton = document.querySelector('#howButton');
var factsButton = document.querySelector('#factsButton');
var whatButton = document.querySelector('#whatButton');
var article1 = document.querySelector('#article1');
var article2 = document.querySelector('#article2');
var article3 = document.querySelector('#article3');

howButton.addEventListener('click', function() {
  if (window.getComputedStyle(article1).visibility === "hidden") {
    article1.classList.remove('disappear');
  } else {
    article1.classList.add('disappear');
  }
})

factsButton.addEventListener('click', function() {
  if (window.getComputedStyle(article2).visibility === "hidden") {
    article2.classList.remove('disappear');
  } else {
    article2.classList.add('disappear');
  }
})

whatButton.addEventListener('click', function() {
  if (window.getComputedStyle(article3).visibility === "hidden") {
    article3.classList.remove('disappear');
  } else {
    article3.classList.add('disappear');
  }
})
