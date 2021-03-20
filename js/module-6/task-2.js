// Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

function filterArray(numbers, value) {
  const filteredNumbers = [];

  //   for (let i = 0; i < numbers.length; i += 1) {
  //     if (numbers[i] > value) {
  //       filteredNumbers.push(numbers[i]);
  //     }
  //   }

  numbers.forEach(number => {
    console.log(number);

    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  console.log('~ filteredNumbers', filteredNumbers);

  return filteredNumbers;
}

filterArray([1, 2, 3, 4, 5], 3);
