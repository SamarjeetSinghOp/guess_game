'use strict';

let numb = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector(`.check`).addEventListener('click', function () {
  let guess = document.querySelector(`.guess`).value;
  guess = Number(guess);
  console.log(typeof guess);

  if (!guess) {
    if (score > 0) {
      document.querySelector(`.message`).textContent =
        'Number Dal do Please 😒';
      document.querySelector(`.score`).textContent = score;

      score--;
    } else {
      document.querySelector(`.message`).textContent = '😥 Ap har gaye ';
      document.querySelector(`.score`).textContent = 0;
    }
    document.querySelector(`.score`).textContent = score;
  } else if (guess == numb) {
    document.querySelector(`.message`).textContent = '✨ Sahi Jawab';
    document.querySelector(`body`).style.backgroundColor = '#60b347';
    document.querySelector(`.number`).style.width = `20rem`;
    document.querySelector(`.number`).textContent = numb;
    document.querySelector(`.check`).style.display = 'none';

    let hs = 0;
    if (hs < score) {
      hs = score;
      document.querySelector(`.highscore`).textContent = hs;
    }
  } else if (guess > numb) {
    document.querySelector(`body`).style.backgroundColor = 'red';
    if (score > 0) {
      document.querySelector(`.message`).textContent = '📈 Jyada hai';
      document.querySelector(`.score`).textContent = score;
      score--;
    } else {
      document.querySelector(`.message`).textContent = '😥 Ap har gaye ';
      document.querySelector(`.score`).textContent = 0;
    }
  } else if (guess < numb) {
    document.querySelector(`body`).style.backgroundColor = 'red';
    if (score > 0) {
      document.querySelector(`.message`).textContent = '📉 Kam hai';
      document.querySelector(`.score`).textContent = score;
      score--;
    } else {
      document.querySelector(`.message`).textContent = '😥 Ap har gaye ';
      document.querySelector(`.score`).textContent = 0;
    }
  }
});

document.querySelector(`.again`).addEventListener('click', function () {
  score = 20;
  numb = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Tukka Marna shuru kare...';
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.number`).textContent = '?';
  document.querySelector(`.guess`).textContent = '';
  document.querySelector(`body`).style.backgroundColor = '#222';
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.check`).style.display = 'unset';
});
