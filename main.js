var someDogs = document.querySelector('.update');
var textBox = document.getElementById('inputText');
var submit = document.querySelector('.submitText');

submit.addEventListener('click', function() {
  var change = textBox.value;
  someDogs.innerText = change;
})

var howButton = document.querySelector('#howButton');
var whatButton = document.querySelector('#whatButton');
var factsButton = document.querySelector('#factsButton');
var article1 = document.querySelector('#article1');
var article2 = document.querySelector('#article2');
var article3 = document.querySelector('#article3');

function disappearSection(button, article) {
  button.addEventListener('click', function() {
    if (window.getComputedStyle(article).visibility === "hidden") {
      article.classList.remove('disappear');
    } else {
      article.classList.add('disappear');
    }
  })
}

disappearSection(howButton, article1);

disappearSection(whatButton, article2);

disappearSection(factsButton, article3);
