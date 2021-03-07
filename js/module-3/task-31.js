// Используя операцию rest дополни код функции add() так, чтобы она принимала любое количество аргументов, считала и возвращала их сумму.

function add(...args) {
  let result = 0;

  for (const arg of args) {
    result += arg;
  }

  console.log(result);

  return result;
}

add(12, 4, 11, 48);
