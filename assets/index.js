let randomNumber = Math.floor(Math.random() * 100);

let counter = 1;

function guess() {
  const guessNumber = parseInt(document.getElementById('number').value);
  if (!guessNumber && guessNumber !== 0) {
    document.getElementById('message').innerHTML =
      'Invalid Input, please type in a number';
    document.getElementById('message').style.color = 'red';
  } else {
    if (guessNumber > randomNumber) {
      document.getElementById(
        'message'
      ).innerHTML = `Too high. Go lower. You have ${
        10 - counter
      } guesses left.`;
      document.getElementById('message').style.color = 'black';
      document.getElementById('history').innerHTML +=
        counter + '. ' + guessNumber + ' is too HIGH.<br>';
      counter++;
    } else if (guessNumber < randomNumber) {
      document.getElementById(
        'message'
      ).innerHTML = `Too low. Go higher. You have ${
        10 - counter
      } guesses left.`;
      document.getElementById('message').style.color = 'black';
      document.getElementById('history').innerHTML +=
        counter + '. ' + guessNumber + ' is too LOW. <br>';
      counter++;
    } else {
      document.getElementById('message').innerHTML =
        'GOOD JOB!! The number is ' +
        guessNumber +
        '. And it only took you ' +
        counter +
        ' guesses. Press New Game if you want to try again.';
      document.getElementById('message').style.color = 'black';
      document.getElementById('history').innerHTML +=
        counter + '. ' + guessNumber + ' is SPOT ON. <br>';
      document.getElementById('guessButton').disabled = true;
      document.getElementById('firework').className = 'firework2';
      setTimeout(function () {
        document.getElementById('firework').className = 'firework';
      }, 5000);
    }
    console.log(randomNumber);
  }
}

function resetGame() {
  counter = 1;
  randomNumber = Math.floor(Math.random() * 100);
  document.getElementById('message').innerHTML =
    "I'm thinking of a number. Can you guess what it is?";
  document.getElementById('message').style.color = 'black';
  document.getElementById('history').innerHTML = '';
  document.getElementById('guessButton').disabled = false;
}
