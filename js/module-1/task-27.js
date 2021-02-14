// Функция getSubscriptionPrice(type) получает строку с типом подписки пользователя (параметр type), проверяет её на совпадение с тремя возможными типами ежемесячной подписки и возвращает цену хранящуюся в переменной price.

// Если значение параметра type это строка:

// 'starter' - цена подписки 0 кредитов.
// 'professional' - цена подписки 20 кредитов.
// 'organization' - цена подписки 50 кредитов.
// Изначально в теле функции была инструкция if...else, которая выглядела вот так.

// if (type === 'starter') {
//   price = 0;
// } else if (type === 'professional') {
//   price = 20;
// } else if (type === 'organization') {
//   price = 50;
// }
// После рефакторинга инструкция if..else была заменена на switch. Дополни код инструкции switch, чтобы функция работала правильно.

function getSubscriptionPrice(type) {
  let price;
  // Пиши код ниже этой строки

 switch (type) { // Дополни эту строку
    case 'starter': // Дополни эту строку
      price = 0; // Дополни эту строку
      break;

    case 'professional': // Дополни эту строку
      price = 20; // Дополни эту строку
      break;

    case 'organization': // Дополни эту строку
      price = 50; // Дополни эту строку
      break;
  }
  // Пиши код выше этой строки
    console.log(price);
  return price;
}
getSubscriptionPrice('starter')