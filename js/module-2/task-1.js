// Запиши условие в инструкции if так, чтобы функция работала правильно.

// function checkAge(age) {
//     let message = '';

//     if (age >= 18) {
//     message = 'Вы совершеннолетний человек';
//     console.log(message);
//     return;
//   }

//     message = 'Вы не совершеннолетний человек';
//     console.log(message);
//     return;
// }

// checkAge(18);

function checkAge(age) {
  if (age >= 18) { // Дополни эту строку
    return 'Вы совершеннолетний человек';
  }

  return 'Вы не совершеннолетний человек';
}