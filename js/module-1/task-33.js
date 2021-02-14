// Функция formatMessage(message, maxLength) принимает строку (параметр message) и форматирует её, если длина превышает значение в параметре maxLength.

// Дополни код функции так, что если длина строки:

// не превышает maxLength, функция возвращает её в исходном виде.
// больше maxLength, то функция обрезает строку до maxLength символов и добавляет в конец троеточие '...', после чего возвращает укороченную версию.

function formatMessage(message, maxLength) {
  let result;
// Пиши код ниже этой строки
    result = message.length <= maxLength ? message : message.slice(0, maxLength) + '...';
// Пиши код выше этой строки
    console.log(result);
  return result;
}
formatMessage('Hello, world!', 10)