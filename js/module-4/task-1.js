// Дополни код так, чтобы в переменной result был результат выполнения функции makePizza, а в переменной pointer была ссылка на функцию makePizza.

function makePizza() {
  return 'Ваша пицца готовится, ожидайте.';
}

const result = makePizza();
console.log(result);

const pointer = makePizza;
console.log(pointer);
