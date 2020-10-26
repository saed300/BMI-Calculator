
var heightInput = document.querySelector('#height-input');
var weightInput = document.querySelector('#weight-input');
var results = document.querySelector('.results');
var btn = document.querySelector('#submit');
var game = document.querySelector('.game');

game.addEventListener('mousedown', function() {
  if(btn.className === 'play-again') {
    window.location.reload();
  }
})

btn.addEventListener('click', function(e) {

  var height = parseInt(heightInput.value);
  var weight = parseInt(weightInput.value);

  if(isNaN(height) || height <= 0 || height === '') {
    results.innerHTML = 'Please enter a correct height';
  }else if(isNaN(weight) || weight <= 0 || weight === '') {
    results.innerHTML = 'Please enter a correct weight';
  } else {
    var bmi = (weight / ((height*height)/10000)).toFixed(2);
    results.innerHTML = `${bmi}`;
    btn.classList = 'play-again';
    btn.value = 'Play Again';
  }
})

