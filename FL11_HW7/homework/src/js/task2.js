let stage = 'a game';
while (confirm('Do you want to play ' + stage + '?') === true) {
  let min = 0;
  let max = 8;
  let win = 0;
  let bank = 100;
  let startPrize = 100;
  let attempts = 3;
  let number = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(number);
  while (attempts > 0) {
    let userNumber = prompt('Choose a roulette pocket number from ' + min + ' to ' + max + '\n' +
      'Attempts left: ' + attempts + '\nTotal prize: ' + win + '$\n' +
      'Possible prize on current attempt: ' + bank + '$');
    if (parseInt(userNumber) !== number) {
      bank = Math.floor(bank / 2);
      attempts--;
    } else {
      win = win + bank;
      let nextRound = confirm('Congratulation, you won! Your prize is ' + win + '$. Do you want to continue?');
      if (nextRound === true) {
        startPrize = startPrize * 2;
        max = max + 4;
        bank = startPrize;
        attempts = 3;
        number = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(number);
      } else {
        break;
      }
    }
  }
  alert('Thank you for a game. Your prize is: ' + win + '$');
  stage = 'again';
}
alert('You did not become a billionaire, but can');