// Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.

function filterArray(numbers, value) {
  // Пиши код ниже этой строки
  const filteredNumbers = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

    for (const number of numbers) {
    if (number > value) {
        filteredNumbers.push(number);
        }
    }
    console.log(filteredNumbers);

    return filteredNumbers;
}

filterArray([1, 2, 3, 4, 5], 3)