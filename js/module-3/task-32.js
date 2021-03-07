// Функция addOverNum() считает сумму всех аргументов. Измени параметры и тело функции addOverNum() так, чтобы она считала сумму только тех аргументов, которые больше чем заданное число. Это число должно быть первым параметром функции.

function addOverNum(number, ...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > number) {
      total += arg;
    }
  }

  console.log(total);

  return total;
}

addOverNum(20, 74, 11, 62, 46, 12, 36);
