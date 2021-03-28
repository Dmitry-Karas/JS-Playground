const words = [
  'программа',
  'макака',
  'прекрасный',
  'оладушек',
  'банан',
  'мандарин',
  'пылесос',
  'телевизор',
  'компьютер',
  'велосипед',
];
const word = words[Math.floor(Math.random() * words.length)];
let answerArray = [];

for (let i = 0; i < word.length; i++) {
  answerArray[i] = '_';
}

let remainingLetters = word.length;
let attempts = 0;

while (remainingLetters > 0 && attempts < 20) {
  attempts++;
  alert(answerArray.join(' '));

  const guess = prompt('Угадайте букву или нажмите Отмена для выхода из игры.');

  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert('Пожалуйста, введите одну букву.');
  } else {
    for (let j = 0; j < word.length; j++) {
      if (word[j] === guess.toLowerCase() && answerArray[j] === '_') {
        answerArray[j] = guess.toLowerCase();
        remainingLetters--;
        console.log(remainingLetters);
      }
    }
  }
}

alert(answerArray.join(' '));
alert(`Отлично! Было загадано слово ${word}`);
