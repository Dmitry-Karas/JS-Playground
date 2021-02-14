// Выполни рефакторинг решения задачи «Склад товаров», заменив инструкцию if...else тернарным оператором.

function checkStorage(available, ordered) {
  let message;
  // Пиши код ниже этой строки

//   if (ordered > available) {
//     message = 'На складе недостаточно товаров!';
//   } else {
//     message = 'Заказ оформлен, с вами свяжется менеджер';
//   }

    message = ordered > available ? 'На складе недостаточно товаров!' : 'Заказ оформлен, с вами свяжется менеджер';
    
    console.log(message);
  // Пиши код выше этой строки
  return message;
}
checkStorage(10, 10)