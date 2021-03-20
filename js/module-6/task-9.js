// Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, значение которого это чётное число, добавляя к нему значение параметра value.

// Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала, наполняла и возвращала новый массив с обновлёнными значениями.

function changeEven(numbers, value) {
  //   for (let i = 0; i < numbers.length; i += 1) {
  //     if (numbers[i] % 2 === 0) {
  //       numbers[i] = numbers[i] + value;
  //     }
  //   }

  const arr = [...numbers];

  // for (let i = 0; i < numbers.length; i += 1) {
  //   if (numbers[i] % 2 === 0) {
  //     arr[i] = numbers[i] + value;
  //   }
  // }

  numbers.forEach(number => {
    if (number % 2 === 0) {
      arr.splice(arr.indexOf(number), 1, number + value);
    }
  });

  console.log('~  arr', arr);

  return arr;
}

changeEven([1, 2, 3, 4, 5], 10);
